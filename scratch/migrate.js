/**
 * SCRIPT DE MIGRACIÓN - Famosos2026
 * ===================================
 * Copia los documentos de Firestore del Firebase de Franco (famosos2026-fran)
 * al Firebase original de Agus (famosos2026-d50d0).
 *
 * COLECCIONES MIGRADAS: albums, trades, promoCodes
 *
 * PASOS PARA USAR ESTE SCRIPT:
 * 1. Descargar el archivo de Cuenta de Servicio del proyecto ORIGEN (famosos2026-fran):
 *    → Firebase Console → famosos2026-fran → Configuración del proyecto → Cuentas de servicio
 *    → "Generar nueva clave privada" → Guardar como: service-account-source.json
 *    → Mover ese archivo a la carpeta donde está este script (Famosos2026/scratch/)
 *
 * 2. Descargar el archivo de Cuenta de Servicio del proyecto DESTINO (famosos2026-d50d0):
 *    → Firebase Console → famosos2026-d50d0 → Configuración del proyecto → Cuentas de servicio
 *    → "Generar nueva clave privada" → Guardar como: service-account-target.json
 *    → Mover ese archivo a la misma carpeta (Famosos2026/scratch/)
 *
 * 3. Instalar dependencias (solo una vez):
 *    node -e "require('child_process').execSync('npm install firebase-admin', {stdio:'inherit'})"
 *
 * 4. Ejecutar la migración desde PowerShell:
 *    node scratch/migrate.js
 */

const admin = require('firebase-admin');
const path = require('path');
const fs = require('fs');

// ====== CONFIGURACIÓN ======
const SOURCE_SA_PATH = path.join(__dirname, 'service-account-source.json');
const TARGET_SA_PATH = path.join(__dirname, 'service-account-target.json');
const COLLECTIONS_TO_MIGRATE = ['albums', 'trades', 'promoCodes'];

// ====== VALIDACIÓN ======
if (!fs.existsSync(SOURCE_SA_PATH)) {
  console.error('❌ No se encontró service-account-source.json en scratch/');
  console.error('   Descargalo desde Firebase Console → famosos2026-fran');
  process.exit(1);
}
if (!fs.existsSync(TARGET_SA_PATH)) {
  console.error('❌ No se encontró service-account-target.json en scratch/');
  console.error('   Descargalo desde Firebase Console → famosos2026-d50d0');
  process.exit(1);
}

// ====== INICIALIZAR AMBOS APPS ======
const sourceApp = admin.initializeApp({
  credential: admin.credential.cert(require(SOURCE_SA_PATH))
}, 'source');

const targetApp = admin.initializeApp({
  credential: admin.credential.cert(require(TARGET_SA_PATH))
}, 'target');

const sourceDb = admin.firestore(sourceApp);
const targetDb = admin.firestore(targetApp);

// ====== FUNCIÓN PRINCIPAL ======
async function migrateAll() {
  console.log('\n🚀 Iniciando migración de Firestore...\n');
  console.log('  Origen: famosos2026-fran');
  console.log('  Destino: famosos2026-d50d0');
  console.log('  Colecciones:', COLLECTIONS_TO_MIGRATE.join(', '));
  console.log();

  let totalDocs = 0;

  for (const collectionName of COLLECTIONS_TO_MIGRATE) {
    console.log(`📂 Migrando colección: ${collectionName}`);
    const snapshot = await sourceDb.collection(collectionName).get();

    if (snapshot.empty) {
      console.log(`   → Vacía, omitiendo.`);
      continue;
    }

    const targetCol = targetDb.collection(collectionName);
    let batchCount = 0;
    let batch = targetDb.batch();

    for (const doc of snapshot.docs) {
      const docRef = targetCol.doc(doc.id);
      batch.set(docRef, doc.data(), { merge: true });
      batchCount++;
      totalDocs++;

      // Firestore acepta máximo 500 operaciones por batch
      if (batchCount === 499) {
        await batch.commit();
        console.log(`   ✓ Lote de ${batchCount} documentos guardado.`);
        batch = targetDb.batch();
        batchCount = 0;
      }
    }

    if (batchCount > 0) {
      await batch.commit();
    }

    console.log(`   ✓ ${snapshot.size} documentos migrados.\n`);
  }

  console.log(`✅ MIGRACIÓN COMPLETADA. Total de documentos migrados: ${totalDocs}`);
  console.log('\n⚠️  RECUERDA MIGRAR TAMBIÉN LOS USUARIOS DE AUTH:');
  console.log('   Seguí las instrucciones del archivo GUIA_MIGRACION.md');
}

migrateAll().catch(err => {
  console.error('\n❌ Error durante la migración:', err.message);
  console.error(err);
  process.exit(1);
});

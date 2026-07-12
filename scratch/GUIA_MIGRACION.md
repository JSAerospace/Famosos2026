# Guía de Migración Completa — Famosos2026

Esta guía te explica paso a paso cómo migrar los datos y las cuentas de usuarios del Firebase de Franco (`famosos2026-fran`) al Firebase original de Agus (`famosos2026-d50d0`).

---

## Parte 1: Migrar la Base de Datos (Firestore)

Esta parte es automática y copia los álbumes, intercambios y códigos promocionales.

### Paso 1 — Descargar las Cuentas de Servicio

**Para el proyecto ORIGEN (`famosos2026-fran`):**
1. Abrí [Firebase Console](https://console.firebase.google.com/) y entrá al proyecto `famosos2026-fran`.
2. Hacé clic en el ⚙️ de Configuración → **"Cuentas de servicio"**.
3. Clic en **"Generar nueva clave privada"** → Confirmar.
4. Guardá el archivo descargado como **`service-account-source.json`** dentro de la carpeta `Famosos2026/scratch/`.

**Para el proyecto DESTINO (`famosos2026-d50d0`):**
1. Abrí `famosos2026-d50d0` en Firebase Console.
2. Igual que antes: Configuración → Cuentas de servicio → Generar clave.
3. Guardá como **`service-account-target.json`** en `Famosos2026/scratch/`.

### Paso 2 — Instalar la Dependencia

Abrí PowerShell en la carpeta `Famosos2026/scratch/` y ejecutá:

```powershell
npm install firebase-admin
```

### Paso 3 — Ejecutar la Migración

Desde la carpeta raíz del proyecto, ejecutá:

```powershell
node scratch/migrate.js
```

Verás en pantalla cuántos documentos se copiaron de cada colección.

---

## Parte 2: Migrar los Usuarios (Firebase Authentication)

Esta parte requiere la CLI de Firebase para exportar e importar las cuentas de usuario con sus contraseñas.

### Paso 1 — Instalar Firebase CLI (si no la tenés)

```powershell
npm install -g firebase-tools
firebase login
```

### Paso 2 — Exportar Usuarios del Proyecto de Franco

```powershell
firebase auth:export scratch/usuarios-export.json --project famosos2026-fran
```

### Paso 3 — Importar Usuarios al Proyecto Original

```powershell
firebase auth:import scratch/usuarios-export.json --hash-algo=SCRYPT --project famosos2026-d50d0
```

> ⚠️ Si el comando de importación pide parámetros adicionales como `--rounds` o `--mem-cost`, podés encontrarlos en el mismo JSON exportado dentro de la sección `hashConfig`.

---

## Parte 3: Verificación Final

Después de migrar datos y usuarios, entrá a `https://jsaerospace.github.io/Famosos2026/` e iniciá sesión con una de las cuentas migradas. Verificá que:

- ✅ Las figuritas del álbum están correctamente cargadas desde la nube.
- ✅ Las monedas y sobres acumulados se ven correctamente.
- ✅ El panel de Admin aparece al iniciar sesión con `franantolini3@gmail.com` o `olanoagus@gmail.com`.
- ✅ Las ofertas de intercambio anteriores aparecen en el mercado.

---

> 🗑️ Una vez completada la migración y verificada, podés deshabilitar el proyecto `famosos2026-fran` desde la consola de Firebase para evitar cargos futuros.

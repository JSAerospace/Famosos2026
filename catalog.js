/**
 * CONFIGURACIÓN DINÁMICA DEL ÁLBUM VIRTUAL DE FIGURITAS
 * 
 * Puedes personalizar totalmente este archivo para cambiar los países,
 * añadir nuevos equipos o renombrar los nombres y posiciones de tus 11 jugadores.
 * 
 * Regla de Oro: Cada país debe tener exactamente 11 figuritas (números 1 al 11).
 * La ruta de las imágenes será buscada en:
 * assets/figuritas/[id_del_pais]/[numero_del_1_al_11].png (o .jpg)
 */

const ALBUM_CONFIG = {
  // Monedas iniciales que recibe el usuario
  initialCoins: 500,
  
  // Costo en monedas de cada sobre
  packCost: 100,
  
  // Lista de selecciones del Álbum
  countries: [
    {
      id: "argentina",
      name: "Argentina",
      flag: "🇦🇷",
      colors: {
        primary: "#74ACDF",     // Celeste Argentina
        secondary: "#FFFFFF",   // Blanco
        accent: "#F6B426"       // Dorado Sol de Mayo
      },
      players: [
        { number: 1, name: "Emiliano Martínez", position: "Arquero", rating: 90, rarity: "epico" },
        { number: 2, name: "Nahuel Molina", position: "Defensor", rating: 82, rarity: "comun" },
        { number: 3, name: "Cristian Romero", position: "Defensor", rating: 88, rarity: "epico" },
        { number: 4, name: "Nicolás Otamendi", position: "Defensor", rating: 84, rarity: "comun" },
        { number: 5, name: "Nicolás Tagliafico", position: "Defensor", rating: 82, rarity: "comun" },
        { number: 6, name: "Rodrigo De Paul", position: "Mediocampista", rating: 85, rarity: "raro" },
        { number: 7, name: "Enzo Fernández", position: "Mediocampista", rating: 84, rarity: "raro" },
        { number: 8, name: "Alexis Mac Allister", position: "Mediocampista", rating: 86, rarity: "raro" },
        { number: 9, name: "Julián Álvarez", position: "Delantero", rating: 85, rarity: "raro" },
        { number: 10, name: "Lionel Messi", position: "Delantero", rating: 98, rarity: "leyenda" },
        { number: 11, name: "Ángel Di María", position: "Delantero", rating: 87, rarity: "epico" }
      ]
    },
    {
      id: "brasil",
      name: "Brasil",
      flag: "🇧🇷",
      colors: {
        primary: "#FFDF00",     // Amarillo Canarinha
        secondary: "#009B3A",   // Verde
        accent: "#002776"       // Azul brasileño
      },
      players: [
        { number: 1, name: "Alisson Becker", position: "Arquero", rating: 89, rarity: "epico" },
        { number: 2, name: "Danilo", position: "Defensor", rating: 80, rarity: "comun" },
        { number: 3, name: "Marquinhos", position: "Defensor", rating: 87, rarity: "epico" },
        { number: 4, name: "Gabriel Magalhães", position: "Defensor", rating: 84, rarity: "comun" },
        { number: 5, name: "Lucas Arana", position: "Defensor", rating: 78, rarity: "comun" },
        { number: 6, name: "Casemiro", position: "Mediocampista", rating: 85, rarity: "raro" },
        { number: 7, name: "Lucas Paquetá", position: "Mediocampista", rating: 82, rarity: "raro" },
        { number: 8, name: "Bruno Guimarães", position: "Mediocampista", rating: 84, rarity: "raro" },
        { number: 9, name: "Rodrygo Goes", position: "Delantero", rating: 86, rarity: "raro" },
        { number: 10, name: "Neymar Jr", position: "Delantero", rating: 91, rarity: "leyenda" },
        { number: 11, name: "Vinícius Jr", position: "Delantero", rating: 93, rarity: "leyenda" }
      ]
    },
    {
      id: "uruguay",
      name: "Uruguay",
      flag: "🇺🇾",
      colors: {
        primary: "#007FFF",     // Celeste Uruguayo
        secondary: "#FFFFFF",   // Blanco
        accent: "#FCD116"       // Sol Uruguayo
      },
      players: [
        { number: 1, name: "Sergio Rochet", position: "Arquero", rating: 81, rarity: "comun" },
        { number: 2, name: "Nahitan Nández", position: "Defensor", rating: 80, rarity: "comun" },
        { number: 3, name: "Ronald Araújo", position: "Defensor", rating: 87, rarity: "epico" },
        { number: 4, name: "José María Giménez", position: "Defensor", rating: 83, rarity: "comun" },
        { number: 5, name: "Mathías Olivera", position: "Defensor", rating: 81, rarity: "comun" },
        { number: 6, name: "Federico Valverde", position: "Mediocampista", rating: 90, rarity: "leyenda" },
        { number: 7, name: "Manuel Ugarte", position: "Mediocampista", rating: 83, rarity: "raro" },
        { number: 8, name: "Nicolás De La Cruz", position: "Mediocampista", rating: 82, rarity: "raro" },
        { number: 9, name: "Facundo Pellistri", position: "Delantero", rating: 79, rarity: "comun" },
        { number: 10, name: "Luis Suárez", position: "Delantero", rating: 84, rarity: "epico" },
        { number: 11, name: "Darwin Núñez", position: "Delantero", rating: 84, rarity: "raro" }
      ]
    },
    {
      id: "espana",
      name: "España",
      flag: "🇪🇸",
      colors: {
        primary: "#C11A2B",     // Rojo Furia
        secondary: "#F1B71C",   // Gualda/Amarillo
        accent: "#1A3263"       // Azul Real
      },
      players: [
        { number: 1, name: "Unai Simón", position: "Arquero", rating: 85, rarity: "raro" },
        { number: 2, name: "Dani Carvajal", position: "Defensor", rating: 86, rarity: "epico" },
        { number: 3, name: "Robin Le Normand", position: "Defensor", rating: 82, rarity: "comun" },
        { number: 4, name: "Aymeric Laporte", position: "Defensor", rating: 83, rarity: "comun" },
        { number: 5, name: "Marc Cucurella", position: "Defensor", rating: 83, rarity: "raro" },
        { number: 6, name: "Rodri Hernández", position: "Mediocampista", rating: 92, rarity: "leyenda" },
        { number: 7, name: "Fabián Ruiz", position: "Mediocampista", rating: 83, rarity: "raro" },
        { number: 8, name: "Dani Olmo", position: "Mediocampista", rating: 85, rarity: "epico" },
        { number: 9, name: "Lamine Yamal", position: "Delantero", rating: 89, rarity: "leyenda" },
        { number: 10, name: "Nico Williams", position: "Delantero", rating: 86, rarity: "epico" },
        { number: 11, name: "Álvaro Morata", position: "Delantero", rating: 82, rarity: "comun" }
      ]
    },
    {
      id: "francia",
      name: "Francia",
      flag: "🇫🇷",
      colors: {
        primary: "#00209F",     // Azul Les Bleus
        secondary: "#FFFFFF",   // Blanco
        accent: "#E2001A"       // Rojo
      },
      players: [
        { number: 1, name: "Mike Maignan", position: "Arquero", rating: 87, rarity: "epico" },
        { number: 2, name: "Jules Koundé", position: "Defensor", rating: 84, rarity: "raro" },
        { number: 3, name: "William Saliba", position: "Defensor", rating: 88, rarity: "epico" },
        { number: 4, name: "Dayot Upamecano", position: "Defensor", rating: 83, rarity: "comun" },
        { number: 5, name: "Theo Hernández", position: "Defensor", rating: 86, rarity: "epico" },
        { number: 6, name: "Aurélien Tchouaméni", position: "Mediocampista", rating: 85, rarity: "raro" },
        { number: 7, name: "Eduardo Camavingga", position: "Mediocampista", rating: 84, rarity: "raro" },
        { number: 8, name: "Antoine Griezmann", position: "Mediocampista", rating: 88, rarity: "epico" },
        { number: 9, name: "Ousmane Dembélé", position: "Delantero", rating: 85, rarity: "raro" },
        { number: 10, name: "Kylian Mbappé", position: "Delantero", rating: 96, rarity: "leyenda" },
        { number: 11, name: "Marcus Thuram", position: "Delantero", rating: 82, rarity: "comun" }
      ]
    }
  ]
};

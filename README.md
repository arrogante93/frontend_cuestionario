# Frontend Cuestionario - Angular

Este es el frontend desarrollado en Angular para consumir la API de cuestionarios.

## Características
- Consumo dinámico de cuestionarios basado en la URL.
- Selección de respuesta única mediante Radio Buttons.
- Evaluación de respuestas con feedback visual (Correcto/Incorrecto).
- Botón de reinicio para limpiar el cuestionario.

## Requisitos
- Node.js y Angular CLI instalados.
- El backend de Spring Boot debe estar ejecutándose en el puerto 8080.

## Cómo ejecutar
1. Navega a la carpeta del proyecto:
   ```bash
   cd "C:\Users\Andres\Documents\Programacion\Angular\frontend_cuestionario"
   ```
2. Instala las dependencias (si no lo están):
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   ng serve
   ```
4. Abre tu navegador en `http://localhost:4200`.

## Rutas Disponibles
El frontend está configurado para navegar dinámicamente:
- `http://localhost:4200/home/derecho/introduccion_al_derecho/cuestionario_1`
- `http://localhost:4200/home/programacion/java/cuestionario_basico`

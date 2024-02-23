---
sidebar_label: 'Linux - Gestión externa de SSL'
title: 'Linux - Gestión externa de SSL'
---

# Docker - Linux

## Pasos 

1. Para instalar debe ejecutar el script evitando instalar el SSL, le será consultado en el proceso y deberá ingresar "n"

2. Finalizada la instalación debe dirigirse a la ruta de instalación
    ```
    cd /root/facturadorpro31/
    ```

3. Edite el archivo `.env`:
    ```
    nano .env
    ```
   
4. Dentro del editor, ubique los parámetros y cámbielos:
   - **Antes:**
     ```
     APP_URL=http://${APP_URL_BASE}
     FORCE_HTTPS=false
     ```
   - **Después:**
     ```
     APP_URL=https://${APP_URL_BASE}
     FORCE_HTTPS=true
     ```

5. Una vez finalizados los cambios, guarde y salga del editor.

6. Ejecute los siguientes comandos para eliminar la caché de la aplicación:
    ```
    php artisan config:cache
    ```

:::info ¡Importante!
Recuerde habilitar el puerto 443 para poder tener acceso a la herramienta.
:::
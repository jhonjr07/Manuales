---
sidebar_position: 1
---


# Docker - Linux - SSL


## Descripción

Hemos elaborado un script para uso en instancias Linux con Ubuntu 18 o superior. Este es un archivo que actualiza el sistema, instala las herramientas, sus dependencias y realiza todas las configuraciones previas, dejando el aplicativo listo para probar en menos de 20 minutos (siempre y cuando el dominio ya esté configurado hacia la instancia). Su ejecución es muy sencilla.

## Requisitos previos

1. Tener acceso a su servidor, vps, máquina virtual o local via SSH, en las instalaciones que realizamos para AWS o Google Cloud, hacemos entrega del usuario, la IP del servidor y la clave ssh que puede ser un archivo .ppk o .pem, recuerde almacenarlas en su equipo local.
2. Tener instalado una versión de ssh en su máquina para conectarse de manera remota, puede utilizar putty, filezilla o una consola terminal. para mayor información sobre el acceso SSH visite los siguientes manuales:
  - [Guía para acceder con Putty (gestión de servidor)](https://docs.google.com/document/d/1PmQejvNd_dkXVm8DPUYlQTag0wvES46tMpxX3MPhkNY/edit#heading=h.nezjsyganf1w)
  - [Guía para acceder con WinSCP (gestión de archivos con aplicación de escritorio)](https://docs.google.com/document/d/1Xpri2102N4b5C-dG-FVPXW5ZWjEz5S4iDjpvl7Zwq2E/edit#heading=h.nezjsyganf1w)
3. Si es posible configurar su dominio apuntando a su instancia para que al finalizar la instalación se encuentre disponible el aplicativo. Edite los registros A y CNAME donde A debe contener su IP y CNAME el valor * (asterisco) para que se tomen los subdominios registrados por la herramienta.

![Dominio](/img/img1.png)



## Pasos

1. Acceder a su instancia vía SSH.
   
2. Loguearse como super usuario:
   
   ```bash
   ejecute sudo su
   ```

3. Clonar el snippet de GitLab que contiene el script:
   
   ```bash
   git clone https://gitlab.com/snippets/2079063.git script
   ```

4. Ingrese a la carpeta clonada: 
   
   ```bash
   cd script
   ```

5. Dar permisos de ejecución al script: 
   
   ```bash
   chmod +x install.sh
   ```

6. El comando a utilizar para iniciar el despliegue requiere de un parámetro principalmente: 

   ```bash
   ./install.sh [dominio]
   ```

   Por ejemplo: 
   
   ```bash
   ./install.sh facturador.pro
   ```

7. Una vez ejecutado el comando, iniciará el proceso de actualización del sistema. Durante este proceso se le solicitará:

   **A.** El usuario y contraseña de GitLab, para que se pueda descargar el proyecto en su instancia.

   **B.** Si desea instalar  SSL gratuito, tenga en cuenta que este debe ser actualizado cada 90 días, el mensaje será el siguiente:
   
      ![Dominio](/img/img2.png)

      &nbsp;&nbsp;&nbsp;&nbsp;I. deberá contestar con “s” o “n” para continuar

      &nbsp;&nbsp;&nbsp;&nbsp;II. si selecciona SÍ, deberá contestar las siguientes preguntas con “y”, son 2 en total, seguidamente se le ofrecerá un código que debe añadir en un récord tipo TXT en su dominio quedando como _acme-challenge.example.com o simplemente acme-challenge dependerá de su proveedor.

         ![Imagen3](/img/img3.png)

      &nbsp;&nbsp;&nbsp;&nbsp;III. para continuar presione enter, luego deberá repetir las acciones para añadir un segundo código y habrá finalizado la configuración, si el proceso es exitoso la ejecución del script continuará.

   **C.** Si desea obtener y gestionar actualizaciones automáticas, deberá disponer de su sesión de gitlab al momento

      ![Imagen4](/img/img4.png)

      &nbsp;&nbsp;&nbsp;&nbsp;I. deberá contestar con “s” o “n” para continuar

      &nbsp;&nbsp;&nbsp;&nbsp;II. de seleccionar SÍ, al final del despliegue se le dará un extracto de texto que debe añadir a su configuración de gitlab

      ![Imagen5](/img/img5.png)


8. Finalizado el script y dependiendo de sus selecciones anteriores, se le entregará varios datos que debe guardar, como:

   **A.** Usuario administrador.
   
   **B.** Contraseña para usuario administrador.
   
   **C.** URL del proyecto.

   **D.** Ubicación del proyecto dentro del servidor.

   **E.** Clave SSH para añadir a GitLab (obligatorio para quienes seleccionan la instalación de SSH).

## Enlaces de Interés

- [Actualización de SSL](https://gitlab.com/b.mendoza/facturadorpro3/-/snippets/1955372)
- [Actualización mediante ejecución Script para instalaciones Docker](https://gitlab.com/b.mendoza/facturadorpro3/-/wikis/Script-Update-Docker)
- [Gestión de SSL independiente, no el que incorpora el Script](https://docs.google.com/document/d/1D87YJ9fq9yHiAauu6SGVugiC3m_i42DrFUt6VKYXuDI/edit#heading=h.5gkh9djmh9b)
- [Guía GitLab para la instalación](https://gitlab.com/b.mendoza/facturadorpro3/-/snippets/1971490  ) (contiene el script usado en el presente manual, además posee los parámetros extras que pueden usarse en la ejecución del paso 6)
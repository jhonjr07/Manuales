"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[569],{5149:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=r(4848),a=r(8453);const i={sidebar_label:"Valet - Linux",title:"Valet - Linux"},l="Manual de Instalaci\xf3n",c={id:"Tutorial/pag4",title:"Valet - Linux",description:"Descripci\xf3n",source:"@site/docs/Tutorial/pag4.md",sourceDirName:"Tutorial",slug:"/Tutorial/pag4",permalink:"/Manuales/docs/Tutorial/pag4",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Tutorial/pag4.md",tags:[],version:"current",frontMatter:{sidebar_label:"Valet - Linux",title:"Valet - Linux"},sidebar:"tutorialSidebar",previous:{title:"Docker - Linux - SSL",permalink:"/Manuales/docs/Tutorial/pag3"}},o={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Requisitos previos",id:"requisitos-previos",level:2},{value:"Pasos",id:"pasos",level:2}];function t(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"manual-de-instalaci\xf3n",children:"Manual de Instalaci\xf3n"}),"\n",(0,s.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsx)(n.p,{children:"Este tutorial gu\xeda la configuraci\xf3n de un servidor Linux desde cero. Destaca la instalaci\xf3n de requisitos clave como PHP 7.2, MySQL, Git, Curl y Composer, con instrucciones espec\xedficas para Ubuntu. Se enfatiza la preparaci\xf3n para Valet, destacando la liberaci\xf3n del puerto :80 y la instalaci\xf3n de Nginx. Ideal para usuarios que buscan un entorno de desarrollo PHP completo en su servidor local."}),"\n",(0,s.jsx)(n.h2,{id:"requisitos-previos",children:"Requisitos previos"}),"\n",(0,s.jsx)(n.p,{children:"Si desea implementar sobre un servidor local Linux \u201cdesde cero\u201d debe:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Contar con acceso root\r\nnp"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Instalar php 7.2 y todas las librer\xedas requeridas por el aplicativo y Laravel"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Instalar Mysql, si lo desea PhpMyAdmin para hacer las primeras pruebas de base de datos"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Instalar Git, Curl, Composer"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"Ubuntu no cuenta con la versi\xf3n 7.2 de php de manera nativa por lo que se debe seguir un par de pasos para agregar un repositorio y luego proceder con la instalaci\xf3n, ellos son"})}),"\n",(0,s.jsx)(n.h2,{id:"pasos",children:"Pasos"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Para poder ejecutar los siguientes comandos debe acceder a la terminal como usuario root."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"apt-get update\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Para poder agregar un PPA, ejecute los siguientes:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"apt-get install software-properties-common\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"apt-get install python-software-properties\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Para agregar el PPA, en algunos casos solicitar\xe1 confirmar con enter"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"add-apt-repository ppa:ondrej/php\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"apt-get update\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Procedemos a Instalar PHP, aunque se instalar algunas librer\xedas junto con PHP, se agregan para asegurar la instalaci\xf3n"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"apt-get install php7.2 php7.2-mbstring php7.2-soap php7.2-zip php7.2-mysql php7.2-curl php7.2-gd php7.2-xml php7.2-mcrypt\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Instalamos Mysql, phpmyadmin opcional"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"apt-get install mysql-server-5.7 mysql-client-5.7 phpmyadmin\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Se le solicitara contrase\xf1a dos veces, con su confirmaci\xf3n, tanto para mysql como para phpmyadmin"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Instalamos Curl y Git"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"apt-get install git\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"apt-get install curl\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Luego se procede a instalar Composer"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"apt-get install composer\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Dar permisos de lectura y escritura a la carpeta composer"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Chmod \u2013R 777 ~/.composer\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Instalar librerias cpriego de Valet"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"composer global require cpriego/valet-linux\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Ir a carpeta home /.profile y a\xf1adir la siguiente linea al final del documento y guardar"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Nano ~/.profile\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"PATH= \u201cHOME/.composer/vendor/bin:$PATH\u201d\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Luego ejecutar en terminal:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"source ~/.profile\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Instalar las siguientes librer\xedas"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"apt install network-maneger libnss3-tools jq xsel\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Ya en este punto el sistema se encuentra listo para instalar Valet pero antes debe asegurarse de tener libre el puerto :80 . Si tienes instalado apache en tu sistema debes detenerlo para liberar el puerto."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Detener servicios de apache2 si lo tienes instalado."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"services apache2 stop\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Valet trabaja con el servidor de nginx por lo cual debe instalarse previamente antes de instalar Valet."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Apt install nginx\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Verificar que el servidor de nginx se est\xe1 ejecutando correctamente"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Systemctl status nginx\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Si todo est\xe1 ok instalar valet"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Valet install\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Con valet podemos tener nuestro c\xf3digo en cualquier parte del sistema en este caso usaremos la carpeta home para instalarlo."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Mkdir ~/code\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"cd code\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"valet park\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Ya en este punto tenemos todo listo para clonar el repositorio y ejecutarlo. Una vez ubicado en /code con la herramienta git, si ya se le ha compartido acceso a repositorio ejecute lo siguiente:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"git clone https://gitlab.com/b.mendoza/facturadorpro3.git\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Esto crear\xe1 una carpeta llamada facturadorpro3, luego de la descarga puede entrar en la carpeta con cd facturadorpro3, dentro de ella puede ejecutar lo siguiente para configurar el archivo .env"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"cp .env.example .env\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Donde APP_URL_BASE corresponde a su dominio, DB_DATABASE ser\xe1 el nombre que le de a la base de datos principal, DB_USERNAME y DB_PASSWORD equivalen al usuario creado anteriormente en la instalaci\xf3n de mysql."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Seguidamente:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"php artisan key:generate\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"composer dump-autoload\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Luego deber\xe1 registrar la base de datos mediante phpmyadmin, accediendo a la ruta sudominio.com/phpmyadmin con el usuario root y contrase\xf1a agregada en la instalaci\xf3n."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Si todo marcha bien es hora de agregar los paquetes faltantes en el proyecto y ejecutar las migraciones."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"composer install\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"php artisan migrate --seed\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Puede verificar actualizando phpmyadmin, en la lista de la izquierda se mostrar\xe1 la base de datos creada y la derecha las tablas generadas."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Con estos pasos podr\xe1 observar el aplicativo en su dominio, en algunos casos si tiene problemas para observar el aplicativo puede deberse a los permisos en las carpetas del proyecto, principalmente storage y cache requieren el siguiente comando"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"chmod -R 755 storage\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"chmod -R 755 bootstrap/cache\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Tambi\xe9n es necesario ejecutar el siguiente comando para establecer la ruta de los archivos cargados de la empresa"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"php artisan storage:link\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Si todo se realiz\xf3 correctamente, ya tendr\xe1 las tablas del usuario principal creadas, y podr\xe1 acceder mediante la web, al proyecto."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"Accesos:"})})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Facturadorpro3.test"}),"\n",(0,s.jsxs)(n.li,{children:["usuario: ",(0,s.jsx)(n.a,{href:"mailto:admin@gmail.com",children:"admin@gmail.com"})]}),"\n",(0,s.jsx)(n.li,{children:"contrase\xf1a: 123456"}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>c});var s=r(6540);const a={},i=s.createContext(a);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);
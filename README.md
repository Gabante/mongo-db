# mongo-db
mongo-db

Instalar Node.js

1) entrar en Node.js.com

2) descargar la version recomendada

3) instalar Node Setup

4) entrar en el explorador de archivos y hacer click derecho sobre la carpeta de "tu equipo" (aparecera una miniventana )ahi buscar la opcion "propiedades"

5) se abrira una pestana de configuracion, ahi darle a la opcion llamada "Configuracion avanzada del sistema"

6) nuevamente se abrira una ventana, ahi deberan buscar la opcion "variables de entorno"

7) aparecera una ventana donde habra la opcion de: "Nuevo" haran click y nombraran la Variable como Node

8) sin cerrar nada vuelven al explorador de archivos, entran en la capeta llamada "Disco local c:" dentro buscan la capeta llamada "archivos de programa" no se confundan hay una que pone x86,ESA NO ES.

9)dentro buscan la capeta "nodejs" entran en ella y copian la direccion en la que esta alojada, es simple, arriba sale una barra con por ejemplo algo asi: Archivos de programa > nodejs 

10) hacen click en esa barra y les saldra un pequeno texto subraydo en azul, ese texto lo copian (ctrl + c)

11) salen de ahi y entran en la ventana donde anteriormente colocaron el nombre de la variables, abajo sale la opcion que dice valor de la variable, ahi pegan el texto que acaban de copiar y le dan "aceptar" a todas las ventanas que dejaron abiertas

12) entran en Visual Studio Code

13)abren la terminal (ctrl + `)

14) escriben el comando "npm init" esperan que cargue y le dan enter hasta que les aparezca "is this OK? (yes) " dan enter una vez mas y escriben el comando "npm i express"

15) Esperan que se descargue el paquete de node.

Crear una cuenta en mongo

1) entran en  Mongo.DB.com y se registran

2) una vez registrados le dan a "crear cluster" o "new daba base"

3) hay tres opciones dos de pago y una gratis, para este ejemplo usaremos la gratuita, hacen click encima y le dan al boton verde de "crear"

4) luego le ponen nombre,una clave crada por ustedes, y una ip de 0.0.0/.0 asi podran realizar el ejemplo sin problema

5) una vez creado les saldra la opocion de conectar, hacen click ahi

5) le dan aceptar a la primera ventana y en la siguiente les saldra un enlace/link 

6) copian ense enlace/link y le dan a aceptar

instalar dependencias

en la terminal de visual estudio escribe lo siguiente

1) npm i dotenv

2) npm i mongoose

3) npm i nodemon

Conectar a mongo db

1) por ultimo entran en la capeta ".env" que esta en visual estudio y donde dice MONGO_URI_TEST- despues del guion, pegan su link y donde dice "<usuario>" quitan todo lo que esta entre las comillas y colocan su usuario y hacen lo mismo donde dice '<password>" 	NO DEBEN DEJAR LAS <> LAS BORRAN Y SOLO DEJAN SU USUARIO Y CONTRASENA.

2) le dan ctrl + s entran en la terminal y colocan npm run start

3) debe salir (el servidor esta corriendo y en mongo db el cluster que crearon tendra una luz verde que significa que esta conectado)

4) enjoy

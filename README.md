# Data Lovers

## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Objetivo](#2-objetivo)
* [3. Definición del producto](#3-definicion-del-producto)
* [4. Historias de usuario](#4-historia-de-usuario)
* [5. Diseño de la interfaz de usuario](#5-diseño-de-la-interfaz-de-usuario)
* [6. Consideraciones técnicas](#7-consideraciones-técnicas)


***

## 1. Resumen del proyecto

En este proyecto construimos una página web que visualiza la data dada de 250 paises, la cual contiene la siguiente información por cada país:
- Su nombre común y oficial.
- Su _Top Level Domain_ (tld), la extensión que utilizan en intenet, por
  ejemplo la de Perú es `.pe` y la de Brasil es `.br`.
- Si se ha independizado o no.
- Su(s) Capital(es).
- La _subregión_ a la que pertenece.
- Los lenguajes hablados en ese país.
- Los países con los que limita.
- Su área total (en metros cuadrados).
- Un emoji con su respectiva bandera.
- La población total.
- Su [coeficiente de gini](https://es.wikipedia.org/wiki/Coeficiente_de_Gini)
  (del año más reciente del cual se tenga data).
- La nomenclatura utilizada por la FIFA para identificar al país.
- Su huso horario.
- El continente al cual pertenece.
- Y por último, imágenes y descripción de su bandera.

Debido a que nuestro usuario final son niños de primaria que requieren conocer de manera fácil la información básica de un país; Decidimos que se visualiza las banderas con sus respectivos nombres, que tuviera la posibilidad de buscar directamente el país y se pudiera filtrar por continentes y ordenarlos alfabeticamente, así como conocer datos estadísticos de acuerdo a la población y sus áreas.


## 2. Objetivo

Analizar los datos proporcionados con el fin de identificar el usuario al que puede ir dirigido y desarrollar una interfaz web interactiva que permita visualizar e interactual con dicha información.

### 2.1. Objetivos especificos

- Conocer al usuario final, para identificar sus historias de usuario
- Clasificar los datos que se desean trabajar 
- Identificar las necesidades del usuario 
- Diseñar una interfaz web interactiva que facilite el manejo de los datos por parte del usuario final 

## 3. Definición del producto
Nuestro proyecto es una pagina web interactiva de la información básica de todos los países del mundo (bandera, capital, nombre común, nombre oficial, continente, subregión, paises con los que se limitan, población y área), la cual va dirigida a niños de básica primaria que desean conocer información de un pais en especifico, los paises que conforman cada contiente y sus subregiones; Al igual que estadísticas de población y área total por continetes.


## 4. Historias de usuario

Realizamos las siguientes historias de usuario al comenzo del proyecto:

-![Historia Usuario inicial](/src/imagen/HUinicial.png)

Pero como no habiamos definido con anterioridad el público objetivo y teniamos  un error ya que el verbo de cada historia no era acorde con la pregunta del para que?.

Por ende, revisamos este tema e iniciamos definiendo nuestro público objetivo con estas pregutas:

a. ¿Quiénes son los principales usuarios de producto? 

   Niñ@s de 5-14 años.

b. ¿Cuáles son los objetivos de estos usuarios en relación con el producto?

  - Reconocer el pais de acuerdo a su bandera. 
  - Conocer información básica de paises. 
  - Aprender que paises tiene cada uno de los continentes.
  - Comparar datos de los continentes.

c. ¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?

  - Ver las banderas para poder aprender a que pais le corresponde
  - Conocer la información de un pais en especifico al hacer click en su bandera o buscandolo por el nombre.
  - Poder visualizar los paises al filtrar por el continente y las subregiones para aprender.
  - Comparar el área y la población por continente para determinar que continente tiene mayor área y cual mayor población
 
d. ¿Cuándo utilizan o utilizarían el producto?

  - Cuando tengan tareas de sociales especificas de contientes y sus paises.
  - Esten interesados en conocer algun país para viajar.
  - Por saber información de los paises por interes general.

Y definimos las siguientes historias de usuario con sus respectivos criterios de aceptación y la definición de terminado(DOD) para cada una de ellas.

* HISTORIA DE USUARIO #1.

![Historia de usuario 1 -Ver](/src/imagen/HU1.png)
![Definición de terminado-Historia 1](/src/imagen/DOD1.png)

* HISTORIA DE USUARIO #2.

![Historia de usuario 2 - Filtrar](/src/imagen/HU2.png)
![Definición de terminado-Historia 2](/src/imagen/DOD2.png)

* HISTORIA DE USUARIO #3.

![Historia de usuario 3 - Ordenar](/src/imagen/HU3.png)
![Definición de terminado-Historia 3](/src/imagen/DOD3.png)

* HISTORIA DE USUARIO #4.

![Historia de usuario 4 - Ordenar](/src/imagen/HU4.png)
![Definición de terminado-Historia 4](/src/imagen/DOD4.png)



## 5. Diseño de la Interfaz de Usuario

### 5.1 Prototipo de baja fidelidad

A continuación presentamos:

- Primer prototipo de baja fidelidad que realizamos

![Prototipo de baja1](/src/imagen/prototipobaja1.png)
![Prototipo de baja1](/src/imagen/prototipobaja1.1.png)

- Segundo prototipo de baja fidelidad

![Prototipo de baja2](/src/imagen/prototipobaja2.png)

- Tercer prototipo de baja fidelidad

![Prototipo de baja3](/src/imagen/prototipobaja3.png)

Para tomar una decisión de cual de estas opciones escoger, tomamos una OH y nos indicaron que debia ser más sencillo, que todo se mostraba en una misma página; que no nos desgastaramos  con mapamundis interactivos ya nos desviaba de los objetivos de este proyecto que es mostrar y manipular la data que tenemos. 

Tomamos en cuenta estas sugerencia y realizamos las modificaciones correspondientes que se veran en el prototipo de alta fidelidad. 


### 5.2 Prototipo de alta fidelidad

* Prototipo de alta fidelidad para mobil.
https://www.figma.com/proto/cgVM0arDxKbTcoA52MMif6/Data-Lovers-Countries-Mobile?type=design&node-id=3-757&t=DLEHVKOvCOCX29XU-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=3%3A757

* Protototipo de alta fidelidad para desktop
https://www.figma.com/proto/Ez5RhXmkRT7wkPVgSUXolv/PAISES?type=design&t=DLEHVKOvCOCX29XU-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A2&node-id=1-2


#### 5.3 Testeos de usabilidad

Se realizaron varios testeos de usabilidad, donde se le pidió a los diferentes usuarios que realiazaran las siguientes acciones.

A. Para Mobile
1. Buscar la información de Colombia.
2. Filtrar por contiente Americano y acceder a la información de México.
3. Volver a la página principal.

B. Para Mobile
1. Buscar la bandera de Singapure y visualizar su información.
2. Filtar por contiente asiatico.
3. Volver a pagina principal.

Los resultados fueron los siguientes:

![Tabla de resultados de testeos](/src/imagen/tablatesteos.png)

Comentarios - Usuario 1:

 * La visualización de las banderas está muy bien junto con el país, pero le colocaria un buscador, para que no me tenga que desplazar por toda pantalla tratando de encontrar el país que busco.
 * Al darle click en la bandera, la información visualizada se ve completa y entendible y al darle clik en la x vuelvo al inicio.
 * Al filtrar por continente hace falta algun botón o acceso para volver a la página principal y un letrero que se mantenga donde indique en que continente se filtro.
 * Me parece que botón de ordenar de a-z se visualice cuando este filtrado por contiente, para hacer visible el cambio.



Comentarios - Usuario 2:

 * Falta un botón para regresar a la página de inicio tanto en la tarjeta del país como para salir del filtrado de continente.
 * Revizar el tipo de letra del proyecto para darle un estilo propio y que se destaque.
 * En la tarjeta de país, se destaque mejor la información más relevante y la que la adicional tenerla en letra más pequeña.
 * El borde de las tarjeta redondeado les gusto ya que da un toque de modernismo y nos sugirio que estuviera en un rango de 0-10.
 * El color de fondo de las tarjeta sea en matices de blanco para resaltar mejor la información.
 * Insertar un hover  para que se visualize donde el usuario debe hacer click para obtener la información.
 * Las gráficas se manejen fuera de un modal por el tamaño de la data


Comentarios - Usuario 3:

 * Me gustaria un botón de busqueda ya que aún no conozco a que pais comerresponde la bandera.
 * Falta un botón para regresar al inicio despúes de filtrar por continente.
 * Que se visualize un botón de inicio
 * Que el título de la página que sea de un tamaño mayor y cambiar su color.
 * El borde redondeado del poppop es agradable y nos aconseja cambiar el fondo un poco más claro. y la información obtenida sea remarcada.


Comentarios - Usuario 4:

 * Se fácilita ver la información al darle clik a la bandera del pais a buscar.
 * Al escribir las primeras letras del país a buscar, es fácil visualizar el país.
 * Cuando filtro por contiente se visualiza muy bien los países que lo conforman.
 * Me gustaria que no tuviera que dar clik en el botón de buscar para obtener la información sino que al ir escribiendo se pueda ir visualizando la busqueda.
 * Falta colocar un boton de Inicio para regresar al menú general.

Con estos resultados, realizamos los siguientes cambios en nuetra página
1. Se incluyó un botón de Inicio.
2. Se adiciono un buscador en la página principal que nos permita escribir el pais en buscar o sus letras inicales y al darle click en el botón de busqueda nos muestre el país selecionado.
3. Se cambio color de fondo del pop-up y se serlecciono la información más relevante para mostrar.
4. Se cambio el color y estilo de la letra tanto header como en los pop-up.
5. Se colocó una imagen al body



### 5.4 Implementación de la Interfaz de Usuario (HTML/CSS/JS)

Nuestra página muestra la data por medio de cartas en la cual se ve bandera y el nombre del continente.
![Intefaza de usuario](/src/imagen/interfaz.png)

Puedes buscar un país en especifico dando click sobre la carta correpondiete es decir donde esta su bandera y nombre ó realizar el proceso de busqueda escribiendo en la caja de texto el país a buscar y al hacer clic en el botón de busqueda obtener la card

![Buscador](/src/imagen/busqueda.png)

![información a la card](/src/imagen/pop-up.png)

Tambien puede filtrar por continente y por subregiones; así puede ver la data filtrada. al igual que ordenar la data filtrada de a-z ó por la z-a.

![Filtro por continent!](/src/imagen/EasternEurope.png)
 
 Y visualizar las tablas de estadísticas al realizar clik en el botón correspondinte.
 ![Tablas de área y población](/src/imagen/tablas%20de%20area%20y%20oblacion.png)


### 5.5 Pruebas unitarias

Se realizarón pruebas unitarias por cada función realizada, a continuación se vera que tienen una cobertura de más del 70% para cada sentencia, función, lines y ramas.

![test](/src/imagen/TEST.png)


## 6. Consideraciones técnicas

### 6.1 `src/index.html`

Aquí codeamos el encabezado de la página <header> ( titulo, logo, la barra de navergación), el cuerpo <body> donde mediante el <root> se pudo generar la interfaz con Javascript y el pie de página <footer> en el cual se encuentra el nombre de las personas que desarrolaron el proyecto.

### 6.2 `src/main.js`

En este archivo desarrollamos todo el código que tiene que ver con
mostrar los datos en la pantalla interactuando con el DOM.

Un ejemplo es la creacion de las cartas.

![Creaciónde cartas](/src/imagen/creaciondecartas.png)

También importamos toda la data de continentes y las diferentes funciones puras que se realizaron en la sección de data.js

![importación de data](/src/imagen/importdata.png)


### 6.3 `src/data.js`

Aquí se encuentra las funciones puras con las cueles logramos procesar y manipular los datos. Estas son:

* Función de Busqueda, en la cual mediante el metodo filter puede filtar en la data de países por el nombre de pais, compara con el dato suministrado por el usuario y retornar el datos solicitados.

![FunciónBusqueda](/src/imagen/funcbusqueda.png)

* Función de filtrado, mediante el metodo filter se filtra la data por el nombre del contiente de acuerdo a lo que el usuario quiera selecionar.

![FuncionFiltrar](/src/imagen/funcfiltrar.png)

* Función de Ordenar, usamos el método sort que recibe dos valores que los compara y puede realizar el ordenamiento.

![FuncionOrdenar](/src/imagen/funcionorder.png)

* Función de calculos agregados, en la cual utilizamos el método reduce que nos devuelve un único valor del array suministrado.

![FuncionCalculos](/src/imagen/calculosagregados.png)


### 6.4 `test/data.spec.js`

En este archivo desarrolamos los test unitarios de cada función pura. Para pode ejecutar estos test cortamos la data original y solo tomamos en cuenta toda la información de un pais por continente.

![testbusqueda](/src/imagen/testbusqueda.png)





console.log("Funciona! 1");

console.log("El uso estricto de esta funcion obliga a esperar hasta que el html este completamente cargado para correr el js y evita problemas,por lo tanto el 2 dentro de esta funcion saldra hasta el final, despues de las notas");

(function(){
  'use strict';
  document.addEventListener('DOMContentLoaded', function(){
    console.log("2")//Siempre se queda hasta el final
  });
})();

console.log("3")

//document.
console.log("La consola permite acceder a archivos, puedes buscar document, document.body o document.head");

//QuerySelector
console.log("Para seleccionar algo mas especifico debes hacer uso del querySelector como: document.querySelector('lo que buscas entre comillas');");

//ejemplos:
// document.querySelector('header');
// document.querySelector('#navegacion');
// document.querySelector('.bio');

(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {

    console.log("querySelector");

    var logo = document.querySelector('#logo');
    console.log(logo);

    var header_aside = document.querySelector('aside h2');
    console.log(header_aside);

  });
})();

console.log("querySelectorAll pone todos los elementos de tu busqueda en un array");

(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {

    console.log("querySelectorAll");

    var h2s = document.querySelectorAll('h2');
    console.log(h2s);

    var letras = document.querySelectorAll('h2, footer p');
    console.log(letras);

    var enlaces = document.querySelectorAll('a');
    console.log(enlaces);
    for (let i = 0; i < enlaces.length; i++) {
      console.log(enlaces[i].innerText);
      
    }

  });
})();

//GetElementByID
console.log("Otra forma es .getElementById que hace precisamente a lo que suena, con una sintaxis de: document.getElementById('id de elemento que se busca')");

//ejemplo: document.getElementById('logo')

(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {

    console.log("getElementById");

    var logo = document.getElementById("logo");
    console.log(logo);

    var navegacion = document.getElementById("navegacion");
    console.log(navegacion);

    //Puede de manera perturbadora controlar tanto html como css

    //navegacion.style.display = "none"; //quita el comentario y observa la magia del cine
  });
})();

//getElementsByClassName
console.log("getElementsByClass te permite buscar varios elementos y verlos a modo de array");

//ejemplo: document.getElementsByClassName('logo');

(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {

    console.log("getElementsByClassName");

    var navegacion = document.getElementsByClassName("navegacion");
    console.log(navegacion);
    console.log(navegacion[0]);//si hay varios puedes acceder a ellos como un array

    var contenido = document.getElementsByClassName("contenido");
    console.log(contenido);

    //contenido[0].style.display= "none"; //quita el comentario y ve los articulos desaparecer

  });
})();

//getElementsByTagName
console.log("getElementsByTagName busca todos los elementos con la misma etiqueta, los a, los li, los div y los imprime en un array");

//ejemplo: document.getElementsByTagName("a");

(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {

    console.log("getElementsByTagName");

    var links = document.getElementsByTagName("a");
    console.log(links);
    console.log(links.length);

    for (let i_link = 0; i_link < links.length; i_link++) {
      links[i_link].setAttribute("target", "_blank");
    }

    //Aguanta prro, se puede ser supercalifragilistico-especifico

    var links_side = document.getElementById("sidebar").getElementsByTagName("a");
    console.log(links_side);

    for (let i_links = 0; i_links < links_side.length; i_links++) {
      links_side[i_links].setAttribute("href", "http://www.google.com");
    }

  });
})();

//$();
console.log("La forma mas practica sin duda es la del dolar, con esta sintaxis: $(elemento);");

//ejemplo:
//$(header);

console.log("busqueda de atribute en la consola, sirve para buscar class y id, que son los atributos");
/*.hasAttribute("atributo"); true/false

logo.hasAttribute("class");
true

.getAttribute("atributo"); nombre del atributo

logo.getAttribute("class");
"logo"

setAttribute("atributo", "nombre_de_atributo"); cambia un id o class

logo.setAttribute("class", "nueva_clase") */

//Nodos

(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {

    console.log("Nodos");
    
    var menu = document.querySelectorAll('#menu ul li a')[0];
    console.log(menu);
    console.log(menu.nodeType) //Para mas informacion visita https://developer.mozilla.org/es/docs/Web/API/Node/nodeType
    console.log(menu.nodeName)
    console.log(menu.attributes)
    console.log(menu.attributes[1])
    console.log(menu.firstChild)
    console.log(menu.firstChild.nodeValue)

    //menu.firstChild.nodeValue = "Home"; //bora el comentario para observar la brujeria
  });
})();

//Crear Elementos + Añadir a html
console.log("Creando elementos y texto, añadiendolos a html tambien");

(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {

    console.log("Crear elementos");
    
    var sidebar = document.querySelector("#sidebar");

    var nuevo_elemento = document.createElement("h1");// creamos un nievo elemento, vendria a ser l <h1>
    var nuevo_texto = document.createTextNode("Hola Mundo");// creamos el texto dentro del h1

    nuevo_elemento.appendChild(nuevo_texto);// Asi se introdice el nuevo texto dentro del nuevo elemento
    sidebar.appendChild(nuevo_elemento);// asi se pone el nuevo elemento + nuevo texto dentro del sidebar

    // Agregar entrada 6
    var enlaces_sidebar = document.querySelectorAll("#sidebar ul");
    //creando el enlace
    var nueva_lista = document.createElement("li");//creando el li-st
    var nuevo_enlace = document.createElement("a");//creando el a-nchor
    nuevo_enlace.setAttribute("href", "#"); // se le da un link fake

    var texto_enlace = document.createTextNode("Entrada 6"); // creando el texto

    nuevo_enlace.appendChild(texto_enlace);// meter texto dentro de anchor
    nueva_lista.appendChild(nuevo_enlace);//meter a dentro de li

    enlaces_sidebar[0].appendChild(nueva_lista); // agregamos al sidebar

  });
})();

// Clonando elementos porque ¿Porque no? 
console.log("Clonando uwu");

(function(){
  'use strict';
  document.addEventListener('DOMContentLoaded', function(){

    console.log("Clonar elementos");

    var contenido = document.querySelector("main");//seleccionar maim
    console.log(contenido);

    var nuevo_contenido = contenido.cloneNode(true);//Clonar main con clone node

    var sidebar_ = document.querySelector("aside");//seleccionar aside

    sidebar_.insertBefore(nuevo_contenido, sidebar_.childNodes[5]);// child node permite decidir en que parte la quieres

    //Dentro de la consola, dir(nombre de la variable); te da todos los datos de la misma 

    console.log("Controlar la insercion con insert before, es muy pro, intentalo")

    var mas_visitados = document.createElement("h2");
    var texto_visitados = document.createTextNode("Posts mas visitados");
    mas_visitados.appendChild(texto_visitados);

    sidebar_.insertBefore(mas_visitados, sidebar_.childNodes[0]);

    var titulos = document.querySelectorAll("main h2");

    for (let i = 0; i < titulos.length; i++) {
      var nuevo_li= document.createElement("li"),
      texto_titulo = document.createTextNode(titulos[i].firstChild.nodeValue);
      nuevo_li.appendChild(texto_titulo);
      sidebar_.insertBefore(nuevo_li, sidebar_.childNodes[1]);
    }

  });
})();

//Eliminar Nodos

(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {

    console.log("Eliminar Nodos")
    
    var primer_post = document.querySelector("main article");
    console.log(primer_post);

    //para eliminar un elemento se debe acceder a el desde el padre, esto se puede con .removeChild
    //primer_post.parentNode.removeChild(primer_post); //Quita el comentario y sorprendete. 

    var primer_link = document.querySelector("#navegacion nav ul li a");
    console.log(primer_link);

    //primer_link.parentNode.removeChild(primer_link);

    var ultimo_link = document.querySelector("#navegacion nav ul li a")[10];
    console.log(ultimo_link);

    //ultimo_link.parentNode.removeChild(ultimo_link);

  });
})();

//Remplazar Nodos

(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {

    console.log("Remplazar Nodos") 

    //remplazar un nodo por otro
    var viejo_nodo = document.querySelector("main h2");
    var nuevo_nodo = document.querySelector("footer h2");

    viejo_nodo.parentNode.replaceChild(nuevo_nodo, viejo_nodo);

    //remplazar un nodo por otro nuevo
    var nuevo_titulo = document.createElement("h2");
    var titulo_texto = document.createTextNode("Hola Mundo!");
    nuevo_titulo.appendChild(titulo_texto);

    var viejo_nodo_ = document.querySelectorAll("main h2")[1];
    viejo_nodo_.parentNode.replaceChild(nuevo_titulo, viejo_nodo_);
  });
})();
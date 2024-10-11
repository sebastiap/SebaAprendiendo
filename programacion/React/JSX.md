# JSX

<b>JSX</b> es una extensión de JavaScript creada por Facebook para el uso con su librería <b>React</b>. Tranforma el codigo escrito a javascript, funcionando como preprocesador.

El objetivo es brindar la sintaxis para escribir codigo más práctico y legible. Es prácticamente como escribir HTML pero hay que tener claro que no estamos escribiendo HTML sino JavaScript extendido.

## A tener en cuenta
Si bien los tags de JSX se ven iguales hay que tener algunas consideraciones para usar estas etiquetas:
+ No se usa class sino className para aplicar estilos a las etiquetas.
+ Los metodos de los tags tambien cambian, debiendo nombrarse con camelCase. Por ejemplo en lugar de <b>onclick</b> hay que escribir <b>onClick</b> .
+ Puedo parar propiedades con cualquier nombre (luego debere definirlo en el componente), pero debo evitar las palabras reservadas
+ Los elementos de tag simple tienen que autocerrarse con una barra ("/") por ejemplo:
~~~
<img src="my-image.png" />
<br />
<hr />
~~~
* Los estilos deben aplicarse pasando un objeto :
~~~
<h1 style={{ fontSize: 24, margin: '0 auto', textAlign: 'center' }}>My header</h1>
~~~

* Otra novedad son los fragmentos, un tag escrito "***<>***" que solo funciona a modo de placeholder para encapsular elementos pero no agrega estructura al DOM. Pueden ser invocados como <React.Fragment></React.Fragment> o <></>. Son utilizado ya que los componentes y al renderizar, React espera un solo elemento.

<h1>Que es React?</h1>

<p>React es una <em>libreria </em>para <strong>lado del cliente</strong>(client-side) de <ins><strong>Javascript</strong></ins>.</p>

Es una libreria basada en componentes[^componentes], declarativo (en oposicion a javascript que es imperativo) y orientado a las interfases de usuario.
<h2>Caracteristicas</h2>

<p>React trabaja evitando el submit. Tradicionalmente, las aplicaciones Web, recibian un click y el usuario esperaba a que una nueva pagina se carge. Es decir, una accion generaba un Request y el browser cargaba una nueva pagina HTML. Con React esto se realiza dinamicamente, sin refrescar la pagina</p>

<p>Otra ventaja, es que en Vanilla javascript cualquier accion simple como un modal o un cambio dinamico requiere mucho codigo y no es facilmente legible. React nos brinda muchas herramientas y atajos para simplificar los elementos repetitivos (Javascript escala horriblemente para el programador, mientras que React permite incorporar elementos repetitivos y personalizados con facilidad con sus componentes).</p>

<p><strong>Declarativo</strong></p>

<p>En javascript debo nombrar especificamente cada&nbsp;accion a realizar. Este enfoque se llama Metodo Imperativo.</p>

<p>En React, por el contrario, utilizando componentes, contruyo mi aplicacion modulo a modulo. Estos componentes funcionan como componentes HTML personalizados a los cuales les indico que hacer y React se encarga del trabajo duro.</p>

<p>El codigo de renderizado en React se ve como porciones de HTML con porciones de Javascript, lo cual simplifica tanto el entendimiento de su estructura como la escritura de codigo. Aclaracion aparte, no es HTML en realidad sino JSX u otro lenguaje que extiende javascript y que emula HTML.</p>

<h2>SPA - Single Page Aplication</h2>

<p>React se enfoca en general a controlar todos los elementos de una pagina. Este enfoque se llama SPA (Single Page Aplication) dado que se trabaja en una pagina unica que va cambiando de acuerdo a los componentes que van renderizandose con cada estimulo del usuario.&nbsp;</p>

<p>Para el usuario esto es indistinto, ya que pareciera que estoy navegando de una pagina a otra, pero en realidad , se esta cargando siempre el mismo HTML, con cambios realizados con React.</p>

<h2>Estructura</h2>

<p>En una aplicacion Web clasica, me basta con tener 3 archivos :</p>

<ol>
	<li>HTML para la estructura</li>
	<li>CSS para los estilos</li>
	<li>Javascript para el funcionamiento y cambios dinamicos en el HTML</li>
</ol>

<p>La estructura de una aplicacion de React es bastante mas compleja, aunque sencilla de entender.</p>

Para utilizar el renderizado dinamico y escribir en JSX[^jsx], a extension de JS que permite escribir una sintaxis similar a&nbsp;HTML evitando la sintaxis clasica(es decir document.getElement... bla bla bla), necesito de una Construccion(Build).

<p>Para esto necesitamos de una herramienta que haga la magia de traducir nuestro codigo al mismo tiempo que permite levantar un server para probar nuestra aplicacion mientras desarrollamos. Existen varias alternativas :</p>

<p>create-react-app</p>

<p>Next.js</p>

<p>Para instalar cualqueira de estas debo tener instalado Node.js, para correr sus comandos npm y npx. Estos comandos nos permiten usar e instalar paquetes.&nbsp;</p>

<p>npm <strong>(Node Package Manager) - Instala Paquetes/Librerias en nuestro proyecto.</strong></p>

<p>npx (<strong>Node Package Execute) - Ejecuta un paquete sin instalar</strong></p>

<p>A grandes rasgos, ejecuto inicialmente npx para crear el proyecto : npx create-react-app</p>

<p>Instalo las librerias necesarias con npm : npm -i router</p>

<p>npm install&nbsp;downloads a package and it&#39;s dependencies.</p>

<p>npm install&nbsp; puede ejecutarse con o sin argumentos.</p>

<p>Si se ejecuta sin argumentos, ,&nbsp;npm install&nbsp; instalara todas las dependencias definidad en <strong>package.json</strong>&nbsp; y generara la carpeta <strong>node_modules</strong>&nbsp;con los componentes instalados.</p>

<p>Importante: npm install se ejecute en el mismo directorio donde se encuentra el archivo <strong>package.json</strong>.</p>

<p>El comando basico para crear una aplicacion React es el siguiente:</p>

<blockquote>
<p>npx create-react-app my-app</p>
</blockquote>

<p>y para levantar el servidor :</p>

<blockquote>
<p>npm start</p>
</blockquote>

<h3>Extensiones recomendadas VsCode</h3>

<ul>
	<li>Prettier</li>
</ul>

<h2>Pero no todo es color de Rosas...</h2>

<p>La principal critica a React es que si bien maneja el renderizado(es su principal enfoque), no es un marco de trabajo como tal. Se necesita de librerias extras para el routing y otras operaciones comunes en las aplicaciones web. Esta &quot;Libertad&quot; es un arma de doble filo, por un lado permite que cada uno arme su aplicacion como le parezca, con las librerias que le parezcan. Por otro lado, al no haber una forma oficial de trabajar ciertos temas, al toparnos con un proyecto en React tenemos que meternos en la cabeza del programador para saber porque uso tal o cual libreria.&nbsp;</p>

<p>Angular , su principal competencia , es un framework como tal y te brinda mas facilidades para el armado de apps.</p>

<p>Vue.js es una mezcla de los 2 anteriores. Se basa en componentes UI y tiene mas herramientas incorporadas por defecto. No hace falta tanto recurrir a la comunidad.</p>

## Elementos de React
Los elementos de React se escriben como elementos normales de HTML .Podes escribir cualquier elemento HTML valido en React, esto es porque como comentaba anteriormente estamos escribiendo en realidad en JSX.  Mas detalle en: [JSX](https://github.com/sebastiap/SebaAprendiendo/blob/main/React/JSX.md)



## React Moderno - Hooks 

Actualmente, los componentes de clase estan en desuso y en su lugar se utilizan los componentes funciones con una funcionalidad que brinda React, llamada Hooks.
¿Cuándo debería usar un Hook? Por ejemplo, antes para agregar estado a un componente, antes había que crear una clase. Ahora puedes usar un Hook dentro de un componente de función existente. ¡Vamos a hacerlo ahora mismo!

### ¿Qué es un Hook? 
Un Hook es una función especial que permite “conectarse” a características de React.

### useState
useState es un Hook que te permite añadir el estado de React a un componente de función. Al agregar el estado a una variable, React rastrea los cambios y vuelve a renderizar el virtual DOM para reflejar cada cambio de estado.



### useEffect
useEffect permite llevar a cabo efectos secundarios en componentes funcionales. Es decir, si se cumple alguna condicion, ejecuto ciertas acciones.
[^jsx]:https://github.com/sebastiap/SebaAprendiendo/edit/main/React/JSX.md
[^componentes]: https://github.com/sebastiap/SebaAprendiendo/blob/main/React/Componentes.md

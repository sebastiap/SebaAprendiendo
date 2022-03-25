<h1>Componentes, el gran aporte de React</h1>

<p>Cuando hablamos de React, lo primero que se viene a la mente a cualquier que esta en tema son los componentes. Asi lo define la documentacion oficial de React:</p>

<blockquote>
<p>Los componentes permiten separar la interfaz de usuario en piezas independientes, reutilizables y pensar en cada pieza de forma aislada.</p>
</blockquote>

<p>Lo que significa coloquialmente, es que los componentes seran partes de la interfaz que funcionan como piezas en un rompecabezas que armamos nosotros a medida que armamos nuestra web. La principal ventaja de esto es que un mismo componente, podemos reutilizarlo facilmente . Ademas, si hay un error puntual de ese componente, no tocamos nada de codigo que no pertenezca a ese componente.</p>

<p>La forma m&aacute;s sencilla de definir un componente es escribir una funci&oacute;n de JavaScript:</p>

<pre>
<code>function Welcome(props) {
  return &lt;h1&gt;Hello, {props.name}&lt;/h1&gt;;
}</code></pre>

<p>Es importante tener en cuenta que las funciones que utilicemos como componentes en React tendran un uso particular de sus parametros. Por convencion, en la definicion de los componentes a dicho conjunto de parametros se los nombra como props.</p>

<p>Ahora vamos al uso practico de esta funcion componente.&nbsp;</p>

<p>Los componentes se invocan a traves de un Tag con un formato casi identico a los tags html. El nombre del tag sera el nombre de la funcion (Por convencion y buenas practicas, se utilizan nombres en mayusculas para no coincidir con tags HTML y diferenciarlos facilmente al leer el codigo).</p>

<p>Entonces, siguiendo con el ejemplo:</p>

<p><code>Dentro de mi JSX, incluire el siguiente tag al resto del HTML:<br />
<br />
&lt;Welcome name=&quot;Sara&quot; /&gt;;</code></p>

<p>Ese tag internamente se traducira a esto:</p>

<p><code>&lt;h1&gt;Hello, Sara &lt;/h1&gt;;</code></p>

<h2 style="font-style:italic">Por que? Es sencillo...</h2>

<p>La funcion Welcome, recibe un parametro props que en definitiva es un objeto JS con un Key/value por cada propiedad pasada al Tag &quot;Welcome&quot; , en este caso se pasa la <strong>propiedad </strong><em>name</em>, con el <strong>valor </strong><em>&quot;Sara&quot;</em> (En react, las <strong>propiedades </strong>de un componente, serian el equivalente a los <strong>atributos </strong>de los tags HTML)</p>

<p>Entonces, volviendo a la funcion&nbsp;<code>props.name, hace referencia a la key &quot;name&quot; que es el mismo &quot;name&quot; que funciona como propiedad en la invocacion&nbsp;<em><strong>&lt;Welcome name=&quot;Sara&quot; /&gt;;</strong></em></code></p>

<p>Si quisiera tambien saludar a Walter, podria hacer otra invocacion con el siguiente tag:<br />
&lt;Welcome name=&quot;Walter&quot; /&gt; y React interpretaria que quiero hacer lo mismo pero con Walter.</p>

<p>Esto es solo una demostracion del gran poder que tienen los componentes en React. La documentacion oficial de React , la verdad que esta muy clara y no sere yo quien lo escriba mejor que ellos, asi que aqui les dejo el link para investigar mas:</p>

<p>https://es.reactjs.org/docs/components-and-props.html</p>

<p><strong>Agur!</strong></p>

<p>&nbsp;</p>

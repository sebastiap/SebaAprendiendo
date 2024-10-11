<p>Buenas a todos, en este breve post,compilado,machete o lo que termine siendo, me propongo a dar una breve pasada o re-pasada a las principales caracteristicas de Js seg&uacute;n mi experiencia. Soy conciente que en Internet hay muchos y muy buenos cursos, pero este resumen no pretende ser uno.&nbsp; Para que repetir lo que ya funciona no?</p>

<p>&nbsp;</p>

<p><ins><strong>Que necesitas para entender este resumen:</strong></ins></p>

<p>Conocimientos basicos de Programacion(Importante)</p>

<p>Conocimientos basicos de Javascript(Deseable)</p>

<h2>Sintaxis de Javascript</h2>

<p><ins><strong>Principales caracteristicas:</strong></ins></p>

<ul>
	<li>Los nombres de las variables (identificadores) deben empezar con una letra, un &ldquo;_&rdquo; o un signo &ldquo;$&rdquo; , los siguientes caracteres pueden ser letras, n&uacute;meros, &ldquo;_&rdquo; o $. No permite el gui&oacute;n medio &ldquo;-&ldquo; .</li>
	<li>Es Case Sensitive.</li>
	<li>Se declara con la palabra let o con var seg&uacute;n su alcance:</li>
</ul>

<blockquote>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; let&nbsp;a = 1;</p>
</blockquote>

<ul>
	<li>Acceden al DOM (Document Object Model) para realizar cambios. Entraremos en detalle mas adelante, un ejemplo rapido de la sintaxis es la siguiente:</li>
</ul>

<blockquote>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;document.getElementById(&quot;algun_id&quot;).innerHTML&nbsp;=&nbsp;&quot;Soy un cambio.&quot;;</p>
</blockquote>

<ol>
	<li>&nbsp;Con el objeto <strong><em>document </em></strong>accedemos al <em>DOM</em>.</li>
	<li>&nbsp;Pasando un parametro al <em>metodo&nbsp;<strong>getElementById </strong></em>obtengo un elemento</li>
	<li>&nbsp;Cada elemento contiene html, al cual accedemos con la <em>propiedad&nbsp;</em><strong><em>innerHTML </em></strong>para modificarlo asignando un valor&nbsp;.&nbsp;</li>
</ol>

<ul>
	<li>Cada l&iacute;nea de c&oacute;digo(o declaraci&oacute;n) se separa con punto y coma de la siguiente:</li>
</ul>

<blockquote>
<p>let&nbsp;a, b, c, d;&nbsp;&nbsp;// Declaro 4 variables<br />
a =&nbsp;1;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// Assign the value 1 to a<br />
b =&nbsp;2;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// Assign the value 2 to b</p>

<p>c =&nbsp;3;&nbsp;d =&nbsp;4;&nbsp;/* Puedo incluir 2 declaraciones en una linea si estan separadas por ; */</p>
</blockquote>

<p>La tabulacion no es obligatorio pero es apreciado para la vista.</p>

<p>&nbsp;</p>

<ul>
	<li>Se declaran variables con function:</li>
</ul>

<blockquote>
<p>function&nbsp;miFuncion() {<br />
&nbsp;&nbsp;document.getElementById(&quot;demo1&quot;).innerHTML&nbsp;=&nbsp;&quot;Hello Dolly!&quot;;<br />
&nbsp;&nbsp;document.getElementById(&quot;demo2&quot;).innerHTML&nbsp;=&nbsp;&quot;How are you?&quot;;<br />
}</p>
</blockquote>

<ul>
	<li>Se pueden declarar funciones anonimas de forma simplificada (Arrow Function):</li>
</ul>

<blockquote>
<p>(parametros) =&gt; {Sentencias}</p>
</blockquote>

<p>&nbsp;</p>

<p><ins><strong>Buenas Practicas de programaci&oacute;n en Javascript</strong></ins></p>

<ul>
	<li>Se recomienda no escribir mas de 80 caracteres en una sola l&iacute;nea.</li>
	<li>Usar tabulado de manera que el c&oacute;digo sea legible, esto incluye dejar espacio entre operandos.</li>
	<li>Comentar las funciones , indicando las entradas y salidas de la misma, as&iacute; como una muy breve descripci&oacute;n de su operatoria. Es recomendado tambi&eacute;n hacer un comentario de una l&iacute;nea sobre partes del c&oacute;digo que requieran especial atenci&oacute;n. Recordar que el c&oacute;digo de uno mismo de hace unos meses, parece c&oacute;digo hecho por otra persona.</li>
</ul>

<h2>Lecturas recomendadas</h2>

<p>Por ultimo, sugiero de tener alguna duda realizar el tutorial de <strong>W3School</strong>:</p>

<p><a href="https://www.w3schools.com/js/default.asp">https://www.w3schools.com/js/default.asp</a></p>

<p>Es sencillo, r&aacute;pido y trata los mismos temas aqu&iacute; tratados en mayor detale&nbsp;con practica incluida.</p>

<p><ins><strong>Funciones asincronas :</strong></ins></p>

<p><a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function">https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function</a></p>

<p><strong><ins>Funciones Flecha:</ins></strong></p>

<p><a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions">https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions</a></p>

<p>&nbsp;</p>

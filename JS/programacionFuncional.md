<h2 style="font-style:italic">Una Breve Introduccion</h2>

<p>Existen 3 m&eacute;todos principales para la programaci&oacute;n funcional en JavaScript:&nbsp;<strong>filter, map, reduce</strong>. Todos estos son m&eacute;todos aplicables a los arrays..</p>

<p>El m&eacute;todo&nbsp;<code><strong>filter()</strong></code>&nbsp;crea un nuevo array con todos los elementos que cumplan la condici&oacute;n implementada por la funci&oacute;n dada.</p>

<p>El m&eacute;todo&nbsp;<code><strong>map()</strong></code>&nbsp;crea un nuevo array con los resultados de la llamada a la funci&oacute;n indicada aplicados a cada uno de sus elementos.</p>

<p>El m&eacute;todo&nbsp;<code><strong>reduce()</strong></code>&nbsp;ejecuta una funci&oacute;n&nbsp;<strong>reductora</strong>&nbsp;sobre cada elemento de un array, devolviendo como resultado un &uacute;nico valor.</p>

<h2 style="font-style:italic">Como y Cuando utilizarlo?</h2>

<p>Es importante conocer y diferenciar bien estos metodos para darle un buen uso. No hay un metodo que resuelva todo.&nbsp;La idea de estos metodos es justamente sacarle partido a los usos especificos. No olvidemos que parten todos de un ForEach&nbsp;y probablemente podamos llegar a la misma solucion, pero la genialidad de esto es aprovechar esta funcionalidad especifica y al mismo tiempo hacer mas claro el codigo.</p>

<p>Por ejemplo, en el caso de map, un forEach podria lograr lo mismo si dentro de la funcion interna, para cada elemento del array incluimos un push a un array nuevo. El nuevo array habria que declararlo antes y llamarlo en el loop. Ahora , con el map ambos pasos se hacen en una sola linea. Al declarar un array nuevo, le asigno el array original con un map y listo!</p>

<blockquote>
<p>var dobles = numbers.map((numero) =&gt; {return numero * 2;});</p>
</blockquote>

<p>Como puede verse la sintaxis es muy clara en este caso.</p>

<p>Con forEach el codigo seria algo asi:</p>

<blockquote>
<p>var dobles = []</p>

<p>numbers.forEach((numero) =&gt; {dobles.push (numero * 2);});</p>
</blockquote>

<p>Hay que mirarlo un poco mas detenidamente para saber lo que esta pasando, verdad?</p>

<p>Con <em><strong>filter </strong></em>pasa lo mismo. Si queremos hacerlo con un forEach, es cuestion de usar un <em><strong>if</strong></em> y un <em>push</em>, pero miren lo claro que queda con filter:</p>

<blockquote>
<p>var mayoresdeedad = numbers.filter((numero) =&gt; {</p>

<p>return numero &gt; 18;</p>

<p>});</p>
</blockquote>

<p>A esta altura nos podemos empezar a dar una idea por donde viene el tema.</p>

<p>El motivo principal de que se hayan creado estas funciones, es porque se tratan de operaciones muy comunes, Es mas, diria que son operaciones basicas de cualquir web o programa moderno y si son tan comunes, porque no tener algo bien practico para estos casos???</p>

<p>Despues de todo, si necesitamos algo especifico, siempre tenemos el viejo y confiable <em><strong>forEach</strong></em>.</p>

<p>Buena Semana!</p>

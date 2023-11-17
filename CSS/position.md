# CSS Layout - La propiedad position

Esta propiedad se usa para ubicar un elemento dentro del documento o dentro de otro elemento.

## Propiedad position

### Valor Static

 * Por defecto todos los elementos tienen valor "static" . Cuando tienen este valor, los elementos no son afectados por las propiedades **top**, **bottom**, **left, y **right**.
Dejarlo con este valor hace que el elemento se posicione automaticamente de acuerdo al flujo natural del documento.

### Valor relative
 * Cambiando los valores de las propiedades **top**, **bottom**, **left, y **right**, haran que este elemento cambie su posicion.
 * Otro de sus usos es junto a otro elemento descendiente con valor absolute. El elemento con valor absolute, busca el primer elemento superior que tenga seteado el valor atributo.

### Valor fixed
 * Cambiando los valores de las propiedades **top**, **bottom**, **left, y **right**, ocupe una posicion fija, relativa al **VIEWPORT**, la cual mantendra, incluso si scrollean la pagina.
 * El elemento fixed desaparece del DOM y no deja un gap donde deberia estar.

### Valor absolute
 * Cambiando los valores de las propiedades **top**, **bottom**, **left, y **right**,se posiciona relativo al ancestro mas cercano que haya establecido su posicion **relative**. Si no tiene ninguno que cumpla esa condicion, tomara al **DOCUMENT BODY** como elemento relativo.
 * Los demas elementos hacen como si no existiera.

### Valor sticky
 * Cambiando los valores de las propiedades **top**, **bottom**, **left, y **right**, ocupa una posicion fija, relativa a la posicion del scroll, la cual mantendra, hasta que se vea arrastrado por el scroll como si quedase pegado.

 * Internet Explorer no soporta el valor sticky y safari necesita un plugin.

## Propiedad z-index

* Especifica el orden del stack de elementos, cual se ve adelante de cual.
* Solo funciona con elementos posicionados (position: absolute, position: relative, position: fixed, o position: sticky) .
* Por defecto es 0 y se usan numeros negativos para poner cosas en el fondo.

## Propiedad overflow
Determina si los elementos contenidos por el elemento padre seran cortados cuando alguna parte queda por fuera de las propiedades seteadas.

Tiene los siguientes valores:

visible - Default. El overflow no se corta. Se agranda la pantalla.
hidden -  El overflow se corta y lo sobrante se vuelve invisible.
scroll - El overflow se corta en la pantalla pero se agrega un scrollbar para ver el resto.
auto - Idem scroll pero solo agrega el scrollbar cuando es necesario.

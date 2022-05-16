# CSS Flexbox

## Que es CSS Flexbox?
Css Flexbox (o Módulo de Caja Flexible) es un modelo de layout de css que se utiliza a su vez como un método que facilite distribuir el espacio entre los ítems de una interfaz y mejorar las capacidades de alineación. 
Es unidimencional, lo que significa que se basa en un eje principal(main axis) que lo determino segun la direccion del Flexbox (Row o Column). El otro eje(secundario o cross-axis) por defecto tiene el comportamiento Stretch (Estirarse).


# Flexbox Container
Es un elemento que contiene los items a los que se ordenara con Flexbox. Todo lo que sucede dentro de este contenedor sigue las reglas de Flexbox.
Por defecto los elementos se ubican en el inicio tanto del eje vertical asi como del eje horizontal, con un comportamiento de fila. Ademas todos los elementos estaran pegados uno al otro sin separacion.

## Definir el eje principal

### flex-direction
Define el eje principal X (row, row-reverse) o Y (column, column-reverse). Por defecto el eje principal es el eje X (horizontal y de izquierda a derecha).

### flex-wrap
Por defecto apagado. Si se activa, en lugar de apretar los elementos para que entren en una sola linea dentro del ancho del contenedor, lo que hara sera separar en una o mas lineas adicionales respetando el ancho de los elementos hijos.
Si se activa con wrap-reverse, tambien desbordara a los elementos en mas filas, pero lo mandara al final del eje secundario.
Acepta los valores nowrap, wrap o wrap-reverse.

### flex-flow
Es una propiedad que engloba a las 2 anteriores (Direction y Wrap). Se le pasan 2 valores , el primero por el eje y el segundo por el wrap

## Alinear Elementos 
Para que la alineacion funcione en Flexbox es importante que exista espacio disponible para ordenar los elementos.

Los atributos utilizados para alinear elementos son:

### justify-content
Configura la alineacion del eje principal.

### align-items
Configura la alineacion del eje secundario (cross-axis). Por defecto su valor es Stretch(estirarse). Hay que tener en cuenta que si los elementos tienen un valor fijo para el eje que deberia estirarse, mantendra ese valor en lugar de estirar el elemento.
baseline: Alinea a la altura del texto de todos los elementos.

### align-content
Tambien configura la alineacion del eje secundario (cross-axis) pero solo si se esta usando un flex-wrap. Alinea a los elementos con los mismos valores que align-items pero maneja la distribucion de los espacios con respecto a las multiples lineas del eje principal.

# Flexbox Items
Son los elementos hijos de un Flexbox Container. Se ajustan de forma flexible a las condiciones y dimensiones de su contenedor.


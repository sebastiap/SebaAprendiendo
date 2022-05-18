# CSS Grid

## Que es CSS GRID?
Css Grid es un layout de css que, al igual que las tablas, nos permite alinear elementos en columnas y filas de forma facil. Esta orientado a garantizar una estructura solida y predecible dentro de nuestro sitio, Flexbox en cambio, sirve para cuando queremos alinear elementos de forma horizontal o vertical de manera simple.

## Grid-Template
Son una serie de propiedades , para configurar las filas y  las columnas, que definen la estructura que tendra el Grid (grid-template-rows Cantidad y tamaño de las filas y grid-template-columns para las columnas respectivamente).

## grid-template-rows
```
	grid-template-rows: repeat(4, auto);
```
## grid-template-columns
```
	grid-template-columns: repeat(3, 1fr);
```
## grid-template
Es una propiedad abreviada que contiene grid-template-rows y grid-template-columns .

## Grid-Gap
Se utiliza para establecer un tamaño de separacion predeterminado entre columnas o filas.
### Ejemplo
```
	grid-gap: 20px;
```
### Grid-column
Atajos para definir donde empieza o termine un elemento del grid.
```
grid-template:50% 50% / 200px
```
Esto creará una cuadrícula con dos filas que ocuparán el 50% del alto cada una, y una columna que será 200 píxeles de ancho. 
Es decir el primer valor corresponde al eje Y y el segundo valor al eje X.
### Ejemplo de grid-column simple
```
	grid-column: span 2; // El elemento ocupara 2 columnas
  grid-column: 3/4; // El elemento empieza en la columna 3 y termina en la 4.
```

### grid-column-start
```
	grid-column-start: 1;
```
### grid-column-end
```
	grid-column-end: -1;
```

## Grid area
Es una variante avanzada de definicion del Layout. Funciona estableciendo areas correspondiente a elementos (con la propiedad grid-area) y luego utilizando el template de areas para definir el layout (grid-template-areas)

### grid-area
```
.contenedor .header {
	background: #12203E;
	color: #fff;
	grid-area: header;
}
```

### grid-template-areas


```
	.contenedor {
		grid-template-areas: "header header header"
						 "contenido contenido contenido"
						 "sidebar sidebar sidebar"
						 "widget-1 widget-1 widget-2"
						 "footer footer footer";
	}
```

## Aplicando estilos (grid-column y grid-row)

### grid-column-start
Establece en que columna comienza la clase a la cual aplico esta propiedad. Acepta valores positivos y negativos. El valor hace referencia a la "linea separadora de la columna" donde comienza, es decir considerando la cuadricula, el inicio de la columna. Si solo se pone esta propiedad , se toma como fin la proxima columna
```
grid-column-start:2;
```
En este ejemplo el fin de la columna seria 3.

### grid-column-end
Junto con grid-column-start establece en que columna termina la clase a la cual aplico esta propiedad. Formo un desde hasta del estilo.

### grid-column
Ambas propiedades pueden declararse juntas con el atajo grid-column
```
grid-column: 4 / 6
```
o bien
```
grid-column: 4 / span 2
```
### span
En lugar de definir un elemento en la cuadrícula basado en la posicion inicial y final, puedes definirlo basado en la longitud de columnas deseada usando la palabra clave span. Ten presente que span solo funciona con valores positivos.
El siguiente ejemplo, le dira que quiero que el estilo termine en 5 columnas despues del comienzo.
```
grid-column-end: span 5;
```

También puedes usar la palabra clave span con grid-column-start para establecer la anchura del elemento en relación a la posición final.
En el siguiente ejemplo, le dira que quiero que el estilo empiece en 3 columnas antes del final.
```
grid-column-end: span 5;
```
### grid-row
Las mismas reglas que se aplican sobre grid-column, se aplican en grid-row para el eje Y.

### grid-area como abreviatura
Esta propiedad, puede utilizarse tambien para pasarle 4 valores (2 correspondientes a grid-column y otros 2 correspondientes a grid-row ).
Los cuatro valores se pasan separados por barras oblicuas en el siguiente orden: grid-row-start, grid-column-start, grid-row-end, seguido de grid-column-end.

```
grid-area: 1 / 2 / 4/ 6  
```

## Fraccion
CSS Grid también introduce una nueva medida, la fracción fr. Cada unidad fr asigna una porción del espacio disponible. Por ejemplo, si dos elementos están establecidos a 1fr y 3fr respectivamente el espacio se divide en 4 porciones iguales; el primer elemento ocupa 1/4 del espacio y el segundo elemento los 3/4 restantes.
Cuando algunas columnas son establecidas en píxeles o em/rem, porcentajes o ems, cualquier otra columna establecida con fr dividirá el espacio restante.


## Juegos de Practica
* https://cssgridgarden.com/#es
* https://codingfantasy.com/games/css-grid-attack/play

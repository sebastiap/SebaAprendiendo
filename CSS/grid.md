# CSS Grid

## Que es CSS GRID?
Css Grid es un layout de css que, al igual que las tablas, nos permite alinear elementos en columnas y filas de forma facil. Esta orientado a garantizar una estructura solida y predecible dentro de nuestro sitio, Flexbox en cambio, sirve para cuando queremos alinear elementos de forma horizontal o vertical de manera simple.

## Grid-Template
Son 2 propiedades , uno para las filas y otras para las columnas, que definen la estructura que tendra el Grid (Cantidad y tamaño de las filas y columnas respectivamente).

## grid-template-rows
```
	grid-template-rows: repeat(4, auto);
```
## grid-template-columns
```
	grid-template-columns: repeat(3, 1fr);
```

## Grid-Gap
Se utiliza para establecer un tamaño de separacion predeterminado entre columnas o filas.
### Ejemplo
```
	grid-gap: 20px;
```
### Grid-column
Atajos para definir donde empieza o termine un elemento del grid.


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

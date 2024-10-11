# Media Queries

Las media queries (en español "consultas de medios") son útiles cuando deseas modificar tu página web o aplicación en función del tipo de dispositivo o de características y parámetros específicos (como la resolución de la pantalla o el ancho del viewport del navegador).

## Sintaxis
Se utiliza la palabra reservada "media" para indicar las condiciones que debe cumplir el tipo de medio para que se le apliquen ciertos elementos css.

```
<!-- CSS media query on a link element -->
<link rel="stylesheet" media="(max-width: 800px)" href="example.css" />

<!-- CSS media query within a style sheet -->
<style>
@media (max-width: 600px) {
  .facet_sidebar {
    display: none;
  }
}
</style>
```

 * Si utilizo **max-width** , el media query afectara todas las resoluciones por debajo del valor de ancho especificado.
 * Si utilizo **min-width** , el media query afectara todas las resoluciones por encima del valor de ancho especificado.


## Fuente 
* https://developer.mozilla.org/es/docs/Web/CSS/Media_Queries/Using_media_queries

# References & useRef
```js
const refContainer = useRef(initialValue);
```

`useRef` devuelve un objeto *ref* mutable cuya propiedad `.current` se inicializa con el argumento pasado (`initialValue`). El objeto devuelto se mantendrá persistente durante la vida completa del componente.

## Referencias (ref)
Este concepto en react lo que permite es referenciar elementos del dom de HTML con una referencia. Para utilizar esta referencia, utilizo el hook useRef .

## useRef - Hook
import {useRef} from 'react';

Se invoca useRef() lo cual crea un "objeto ref" que puedo asignarlo a una variable.

## ref - prop
Para conectar el objeto referencia con el elemento del DOM deseado debo usa un prop especial llamado **ref** , al cual le paso como valor el nombre de la variable que guarda el objeto ref.

### Conocer el valor actual del elemento:
Teniendo el prop ref completo en el tag del elemento, ref={refElemento}

refElemento = useRef();
refElemento.current.value;

Ten en cuenta que useRef no notifica cuando su contenido cambia. Mutar la propiedad .current no causa otro renderizado. Si quieres correr algún código cuando React agregue o quite una referencia de un nodo del DOM, puede que quieras utilizar en su lugar una referencia mediante callback o el hook useState.

## Ver todos los Hooks en:
https://es.reactjs.org/docs/hooks-reference.html#useref

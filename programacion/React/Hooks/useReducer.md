# useReducer

## Que es useReducer ?

El hook useReducer se usa para estados complejos y transiciones de estado. 
Toma una ***función reductora*** y un ***estado inicial*** como entrada y devuelve el estado actual y una función de envío como salida.

## Diferencia con useState
Tanto useState como useReducer tienen el mismo objetivo: manejar el estado local de nuestros componentes. 
La diferencia radica en la manera que tienen de llegar a su solución. useState es un poco mas "libre" en el sentido que la funcion que actualiza nos deja pasarle cualquier valor y lo actualiza.
useReducer nos permite ser mas detallistas e indicar ***como*** se actualiza. Nos permite detallar la operatoria que queremos que realice para cada caso que contemplemos.


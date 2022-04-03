# useEffect
useEffect permite correr cierto codigo bajo ciertas condiciones

## Parametros

### Primer Parametro - Funcion
Como primer parametro se pasa una funcion a ser ejecutada. Lo mas comodo es definirla como una arrow function, ya que no interesa el nombre de la funcion. No podra ser llamada por fuera del useEffect.

### Segundo Parametro - dependencias

El segundo argumento es un array de dependencias.
Hay 3 variantes para utilizarlo

* Vacio - Si no completo el segundo parametro se va a correr siempre que se cargue este componente . No seria diferente a correr el codigo en el componente.
* [ ]: Si dejo el array vacio, correra una sola vez el codigo de esa funcion. Correra solo la primera vez que se cargue el componente.
* Si dentro del array pongo el nombre de una variable, verificara cambios en la variable para volver a ejecutar.

Observaciones:
- Solo deberia usarlo si tengo valores externos, no es el caso. 
- Si por ejemplo sacaramos un dato de props o una url si deberia indicar esta dependencia

## Ejemplo de Uso


## Referencias

https://es.reactjs.org/docs/hooks-effect.html

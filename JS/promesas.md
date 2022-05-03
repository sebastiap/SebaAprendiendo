# Promesas
Una promesa es el resultado de una operacion asincrona(la cual puede estar disponible (***Ahora o en el futuro***). Esta operacion puede finalizar en ***Exito*** o ***Error*** .

Las promesas tienen 3 estados :
* Pending
* Fullfilled
* Rejected
* settled 

## Creacion de una promesa
Podemos crear nuestras promesas, basados en esta sintaxis:
```
new Promise(function(resolve, reject) { ... });
```

## Then & Catch
Para obtener el resultado de una promesa se puede obtener utilizando el metodo ***then*** . Para los errores tenemo ***catch*** .

### Peticiones Asincronas
Es un objeto que en algun momento va a llegar, pero no sabemos cuando o si alguna vez a a llegar.

## Fetch
Es la api oficial de javascript para el manejo de promesas.  

## Axios
Una variante de Fetch. Consiste en una libreria externa (de terceros) . Permite customizacion extra de los HTTP VERBS.
Axios por defecto usa JSON. 

### Sintaxis
```
promesa
  .then(result => console.log (result)  // Resultado positivo
  .catch(error => console.log (error)  // Resultado negativo
```

## Async Await
Estas palabras reservadas permiten manejar peticiones asincronas como si fueran peticiones sincronizadas.

```
const funcion = async () => {
const res = await fetch(URL_API)
if (res.ok) {
...
}
}
```

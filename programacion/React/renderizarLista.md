# Renderizar una Lista

Para renderizar una lista lo que tenemos que hacer es utilizar la función **map**,propia de los array, para realizar una accion por cada elemento.
Cada elemento del array va a ser un JSON que tendrá una serie de valores.
Dentro de la funcion del map, invocare las key del JSON para invocar sus valores. Esto se hara tantas veces como elementos existan en el array.

## La key

React exije que cada elemento del array a tratar sea identificado por un id unico, al cual se lo conocera como "key". Al invocar el map deberiamos indicarle cual sera ese key.

### Ejemplo de uso:

https://github.com/sebastiap/SebaAprendiendo/blob/main/React/ejemplos/routing/src/components/layout/hero.jsx

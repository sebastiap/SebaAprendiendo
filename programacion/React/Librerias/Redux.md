#REDUX,

## Que es?
Redux presenta un store central en la memoria de la app (no es una DB).
De este modo, los datos de los que dependen diferentes partes de la app estarán almacenados. Funciona de forma similar al hook useContext pero con mayor flexibilidad.

## Acciones en el contexto
Así, si un componente requiere ejecutar una accion  sobre los datos ( Hacer un filtro por ejemplo), el componente ejecutará un DISPATCH que a su vez ejecutará un ACTION que causará una modificación del estado del dato.

## Para instalar
npm i redux
Si quiero utilizar funciones dentro del reducer uso Thunk Middleware
npm i redux-thunk

![image](https://user-images.githubusercontent.com/36540321/192174009-c25c9189-8ac7-4df9-bca7-57660c0101bf.png)

# Factory Method

## Que es ?
Factory Method es un patrón de diseño creacional que proporciona una metodologia para crear objetos en una superclase, mientras que independiza a las subclases de como alteran o producen su resultado.

## Como Funciona ?
El código que utiliza el método fábrica, no encuentra diferencias entre los productos devueltos por sus subclases, y trata a todos los productos indiferentemente. El cliente sabe que todos los objetos deben tener los mismos métodos , pero no necesita saber cómo funcionan exactamente.

## Ejemplo 
Un buen ejemplo de Factory, se pueda aplicar en los metodos de persistencia de una aplicacion. La arquitectura plantearia que todos los metodos correspondan al CRUD (abstrayendose de los metodos propios de cada tecnologia).
Si por ejemplo tiene persistencia por archivo, por cache y por Base de datos, el metodo GET llamara a la capa de persistencia correspondiente, segun se haya configurado.

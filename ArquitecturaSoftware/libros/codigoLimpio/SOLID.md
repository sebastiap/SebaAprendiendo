# SOLID

## Single-responsibility principle
Principio de responsabilidad unica, se refiere a que cada clase,metodo,funcion,etc tenga un unico proposito.

## Open–closed principle
Un modulo de software debe estar abierto a ser extendido pero cerrado a modificar su implementacion. En pocas palabras, mientras menos toco del codigo mejor a la hora de extenderlo.

A module will be said to be open if it is still available for extension. For example, it should be possible to add fields to the data structures it contains, or new elements to the set of functions it performs.
A module will be said to be closed if [it] is available for use by other modules. This assumes that the module has been given a well-defined, stable description (the interface in the sense of information hiding).

## Liskov substitution principle
Principio de sustitucion, si una clase es subtipo de otra, deberia funcionar de la misma manera que su clase padre.

## Interface segregation principle
Desacople, ningun programa debe depender de metodos que no usa.

## Dependency inversion principle
Inversion de dependencia,el código que es el núcleo de nuestra aplicación no depende de los detalles de implementación, es generico.

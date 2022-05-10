# Clases
Javascript posee una sintaxis clara y simple para crear objetos y lidiar con la herencia.

## Definicion
Una manera de definir una clase es mediante una declaración de clase. Para declarar una clase, se utiliza la palabra reservada class y un nombre para la clase "Rectangulo".

```
class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
}


```

## Constructor
l método constructor es un método especial para crear e inicializar un objeto creado con una clase. Solo puede haber un método especial con el nombre "constructor" en una clase.
Para detalle completo ver:
https://github.com/sebastiap/SebaAprendiendo/blob/main/JS/constructor.md

## Extends
Palabra reservada utilizada para crear una clase hija

```
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hablar() {
    console.log(this.nombre + ' hace un ruido.');
  }
}

class Perro extends Animal {
  hablar() {
    console.log(this.nombre + ' ladra.');
  }
}
```

## Super
La palabra clave super es usada para llamar funciones del objeto padre.

```
class Gato {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hablar() {
    console.log(this.nombre + ' hace ruido.');
  }
}

class Leon extends Gato {
  hablar() {
    super.hablar();
    console.log(this.nombre + ' maulla.');
  }
}
```

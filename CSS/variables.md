# Propiedades personalizadas (--*): variables CSS

## Que son?

Las propiedades personalizadas o variables de CSS , declaradas con el prefijo --, como --variable, representan las propiedades personalizadas que contienen un valor que puede ser usado en otras declaraciones usando la función ***var***.
De esta forma podemos declarar el valor una sola vez en una variable y luego llamar a la variable en selectores CSS posteriores.
Las propiedades personalizadas tienen como alcance los elementos en los que se declaran y participan en la cascada.

## Ejemplo

```
:root {
  --first-color: #488cff;
  --second-color: #ffff8c;
}

#firstParagraph {
  background-color: var(--first-color);
  color: var(--second-color);
}

#secondParagraph {
  background-color: var(--second-color);
  color: var(--first-color);
}
```

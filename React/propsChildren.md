# Containment

Si bien muchas veces los componentes no saben los "hijos" que tendran, React nos brinda la posibilidad de tenerlos en cuenta al definir un componente padre.

## Props Especial - Children
**props.children** es un componente especial que React incorpora por default. Este componente lo que trae es el contenido que es pasado dentro del tag del componente al cual se le pasa el props.
Normalmente una propiedad se pasa dentro del tag como un atributo con un nombre definido por el programador. En el caso de **children** esta se rellena con todo el contenido dentro del tag de un componente.

## Componente Contenedor

Definiendo un padre con la propiedad children, le haremos saber como debe acomodar a su hijo dentro de su estructura.
~~~
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}
~~~

El hijo sera definido de la siguiente manera:

~~~
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
~~~

Children no necesita ser necesariamente un solo tag HTML , si no que incluira a todos los hijos contenidos en la etiquetas del padre.

# Specialization
Se trata de declarar un componente como un "caso especial" de otro. 
React no recomienda el uso de herencia, por lo que este metodo sera parte de las "buenas practicas" cuando utilizamos componentes especializados.

~~~
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
    </FancyBorder>
  );
}

function WelcomeDialog() {
  return (
    <Dialog
      title="Welcome"
      message="Thank you for visiting our spacecraft!" />
  );
}
~~~


## Ejemplos

Ver ejemplos en Layout y Wrapper

## Bibliografia Oficial

* https://reactjs.org/docs/composition-vs-inheritance.html

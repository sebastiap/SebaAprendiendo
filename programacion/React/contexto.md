# Context en React

## Estado Global
Cuando manejamos normalmente el estado, con el hook useState, dicho estado solo corresponde a el componente que lo declara, y como mucho, sera utilizado por algun componente hijo.
Con la necesidad de un estado global, nace lo que llamamos **context**, que funciona como un estado que puede ser consultado por cualquier componente de la aplicacion.


## Solucion Nativa - Context
Context es una herramienta brindada por React para el manejo de estado.[^useContext]

### Instalacion - Creacion de Contexto
~~~ 
import { createContext } from "react";
~~~ 
### Uso
El resultado de context es un objeto de javascript por lo que puede ser guardado en una constante o variable. Este objeto no deja de ser un componente de React.
~~~ 
const Context = createContext();
~~~ 
Cuando defino un componente, el valor inicial se carga entre los parentesis de la funcion **createContext** al igual que pasaba con **useState**
~~~ 
const Context = createContext({
    favorites:[],
    total:0
});
~~~ 

Verificar el repositorio para un ejemplo mas detallado[^create]

### Componente de Actualizacion - Provider
Ademas del contexto, siempre necesito definir un componente. Este componente sera el encargado de cambiar los valores del contexto. Tendra el trabajo de proveer el contexto a todos los componentes interesados en 
consultar y actualizar el contexto. Para eso, este componente debe **envolver** a todos los componentes interesados (generalmente se ubica a la altura de app.js). 
Para esta actualizacion necesito tambien una constante identica a la definida con createContext en combinacion con useState. Abajo un ejemplo muy basico:
~~~ 
function FavoritesContextProvider(props)  {
const [userFavorites,setUserFavorites] = useState([])
    const context = {
        favorites:userFavorites,
        total:userFavorites.length
    };

    <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}
~~~ 


### Componentes Interesados - Envolver componentes para usar el contexto
Aqui tengo 2 opciones, o puntualmente invoco la funcion FavoritesContextProvider en el componente que la necesita o envuelvo directamente index.js para que sea utilizado en toda la aplicacion. Por ejemplo:
~~~ 
import React from 'react';
import ReactDOM from 'react-dom';
import { FavoritesContextProvider as Context } from './store/favorites-context';

import App from './App';

ReactDOM.render(
  <Context>
      <App />
  </Context>,
  document.getElementById('root')
);
~~~ 

### Uso del Contexto - useContext
Luego de crearlo, debo usar el contexto utilizando el hook useContext
~~~ 
  import {useContext} from "react";
  const fContext = useContext(FavoritesContext);
~~~ 
Ejemplo completo de proyecto Spika-games en este repositorio.[^use]:
## Aqui aparece Redux...
**Redux** Es un paquete de mantenimiento de Estado muy conocido y utilizado mundialmente en millones de sitios.[^redux]

## Buenas Practicas
 * Por convension, se utiliza una carpeta de nombre **store** para almacenar los archivos que corresponden al manejo de estado.
 * Al declarar y asignar el contexto la constante debe comenzar su nombre con mayuscula , como todo **componente** de React.
[^redux]:https://es.redux.js.org/
[^useContext]:https://es.reactjs.org/docs/hooks-reference.html#usecontext
[^use]:https://github.com/sebastiap/SebaAprendiendo/blob/main/React/ejemplos/context/useContext.jsx
[^create]:https://github.com/sebastiap/SebaAprendiendo/tree/main/React/ejemplos/context


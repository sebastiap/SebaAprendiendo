## Uso del Contexto - useContext
React Context es una forma de administrar el estado globalmente.
useContext es un hook utilizado para manejar este estado global.

## useContext vs Redux
**Redux** Es un paquete de mantenimiento de Estado muy conocido y utilizado mundialmente en millones de sitios.

|                                       useContext                                        |                          Redux                          |
|:---------------------------------------------------------------------------------------:|:-------------------------------------------------------:|
| useContext es un hook provisto por React                                                | Redux es una libreria de manejo de estado               |
| Se utiliza para compartir datos                                                         | Se utiliza para manejar datos y estado                  |
| Los cambios se hacen a traves del valor de Context                                      | Los cambios se hacen con funciones puras (reducers)     |
| Podemos cambiar el estado                                                               | El estado es read-only. No se puede cambiar directamente|
| Re-renderiza todos los componentes cuando haya un valor actualizado por un prop         | Solo re-renderiza los componentes actualizados          |
| Mejor para aplicaciones pequeñas                                                        | Mejor para aplicaciones grandes                         |
| Mas simple y requiere menos codigo                                                      | Mas complejo de enteder                                 |



useContext is a hook.	Redux is a state management library.
It is used to share data.	It is used to manage data and state.
Changes are made with the Context value.	Changes are made with pure functions i.e. reducers.
We can change the state in it.	The state is read-only. We cannot change them directly.
It re-renders all components whenever there is any update in the provider’s value prop.	It only re-render the updated components.
It is better to use with small applications.	It is perfect for larger applications. 
It is easy to understand and requires less code.	It is quite complex to understand.


## Mas sobre contexto...
* https://github.com/sebastiap/SebaAprendiendo/blob/main/React/contexto.md
* https://www.w3schools.com/react/react_usecontext.asp

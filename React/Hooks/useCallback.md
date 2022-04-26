# useCallback
useCallback es un hook utilizado para mejorar la performance de nuestras aplicaciones. Especificamente previene que se renderice nuevamente una funcion en cada rerenderizado.

## Uso
~~~
import { useCallback } from "react";
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);
~~~

## Resultado
En este caso la funcion addTodo solo se ejecutara si se modifica la dependencia (en este caso la variabla todos).

# memo 
Es una funcion de React que evita que un componente se renderice nuevamente por un renderizado del padre. 

## Uso
~~~
import { memo } from "react";
const Todos = ({ todos, addTodo }) => {
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

export default memo(Todos);
~~~
## Resultado
El componente Todos, solo se renderiza si alguno de sus props se actualiza.

# useMemo
useCallback es otro hook utilizado para mejorar la performance de nuestras aplicaciones. Especificamente previene que se calcule nuevamente un valor en cada rerenderizado.

## Uso
~~~
import { useMemo } from "react";
const calculation = useMemo(() => expensiveCalculation(count), [count]);
~~~

## Resultado
En este  el valor de todos no se recalculara si no que se guardara en memoria. En caso de que cambie la variable count, recien ahi volvera a calcularse.

# Diferencias:
Los hooks useCallback y useMemo son similares. La principal diferencia es que useMemo devuelve un ***valor*** memorizado y useCallback devuelve una ***funcion*** memorizada.


## Referencias

* https://www.freecodecamp.org/news/the-react-cheatsheet/
* https://www.w3schools.com/react/react_usecallback.asp
* https://www.w3schools.com/react/react_memo.asp
* https://stackoverflow.com/questions/56910036/when-to-use-usecallback-usememo-and-useeffect

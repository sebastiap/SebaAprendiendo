# useState
useState permite monitorear el valor de algunas variables para renderizar dinamicamente.

## Uso
Por defecto React no ctualiza cada vez que hay un cambio, si no que actualiza cuando se le indica especificamente que lo haga. Al utilizar state, le indico que monitoree ciertos cambios en uno de los componentes para renderizarlo nuevamente.

~~~
const [userVariable,setUserVariable] = useState([])  
~~~

* React utiliza el concepto de desestructuracion(Sintaxis agregada en ES6) de javascript para manejar un par [ValorEstadoActual,FuncionQueActualizaEstaVariable] .
* El argumento de useState es el estado inicial de la variable.
* El array declarado es anonimo. Solo nos interesa el valor de su primer elemento.

## Parametros

### Primer Parametro - Variable
Como primer parametro se pasa una funcion a ser ejecutada. Lo mas comodo es definirla como una arrow function, ya que no interesa el nombre de la funcion. No podra ser llamada por fuera del useEffect.

### Segundo Parametro - Funcion Actualizadora.

El segundo argumento del array . Lo unico que hacemos con este, es invocarlo al momento de pasar un valor al state(Pasandole ese valor como argumento).

Observaciones:
- Es conveniente encapsular esta funcion dentro de una pieza de codigo que opere otras variables y que la funcion actualizadora solo reciba el valor final. 
- La actualizacion si bien es rapida, no es inmediata, por lo que no conviene consultar el valor con un console.log por ejemplo, ya que no sera preciso.

## Ejemplo de Uso
    const items = JSON.parse(localStorage.getItem('items'));
    console.log("ITEMS" + items)
    if (items) {
      setUserFavorites(items);
    }

## Referencias

https://es.reactjs.org/docs/hooks-state.html

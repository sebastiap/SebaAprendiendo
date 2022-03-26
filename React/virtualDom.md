# Virtual Dom

### ¿Qué es el DOM virtual?

El DOM virtual (VDOM) es un concepto de programación donde una representación ideal o "virtual" de la IU se mantiene en memoria y en sincronía con el DOM "real". Este proceso se conoce como [reconciliación](/docs/reconciliation.html).

Este enfoque hace posible la API declarativa de React: Como programador, le decimos a React en qué estado queremos que esté la IU, y este se hará cargo de llevar el DOM a ese estado.  Con React, nos abstraemos de la manipulación manual del DOM que realizariamos si usamos Vanilla JS.

### ¿Es el Shadow DOM lo mismo que el DOM virtual? {#is-the-shadow-dom-the-same-as-the-virtual-dom}

No, son diferentes. El Shadow DOM es una tecnología de los navegadores diseñada principalmente para limitar el alcance de variables y CSS en componentes web. El DOM virtual es un concepto que implementan bibliotecas en JavaScript por encima de las APIs de los navegadores.

### ¿Qué es "React Fiber"? {#what-is-react-fiber}

Fiber es el nuevo motor de reconciliación en React 16. Su principal objetivo es permitir el renderizado incremental del DOM virtual. [Leer más](https://github.com/acdlite/react-fiber-architecture).

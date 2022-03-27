# Modulos CSS

Esta funcionalidad, permite utilizar CSS localizado en un solo componente. Esto es una feature propia de React.
Para utilizarla , el archivo css, debe terminar su nombre con ".module.css"

y en el archivo del componente debo importarlo y utilizarlo como un JSON. 
Puedo nombrar el JSON como desee:

import headerClasses from './header.module.css'

Mientras el nombre del archivo sea correcto, se interpretara que cada clase definida en ese archivo será una propiedad a la cual puede invocar en el JSX llamándola 
className= nombredelJson.clase

Ejemplo en Proyecto Spika Games:
+ Header
+ Hero
+ Footer

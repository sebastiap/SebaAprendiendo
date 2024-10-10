# Git

## Repositorio de Codigo Git
En esta seccion guardare borradores,herramientas y comandos para utilizar git eficientemente.

### Notas especiales
> [!NOTE]  
> Con esta anotacion brindo una nota a tener en cuenta.

> [!TIP]
> Con esta anotacion brindo un consejo para tener un mejor resultado.

> [!IMPORTANT]  
> Con esta anotacion brindo una nota de algo importante.

> [!WARNING]  
> Con esta anotacion brindo una nota a tener en cuenta para evitar problemas.

> [!CAUTION]
> Con esta anotacion brindo una nota a tener en cuenta y sus consecuencias negativas.

## Estructura principal

### Directorio .git
Es un directorio oculto que tiene los detalles de la implementacion del repositorio. 

### Archivo .gitignore
Indica los nombres de archivos y directorios que deben ser ignorados por git a la hora de armar los commits. Se puede usar * para expresiones regulares y tambien el signo ! para NO IGNORAR un archivo.

## Comandos Principales

### Git Status
Me dice el estado del repositorio. Con -s obtengo la version simple.

### Git Log 
Muestra log de commits. Sus principales opciones son :
 * --all log de toda las ramas
 * --oneline una linea por commit
 * --graph - Version Grafica

### Git Add
Mueve uno o mas archivos de la zona de trabajo local, al STAGE.

### Git Commit
Crea un commit con los cambios que se encuentren en la zona de STAGE.

### Git Stash
Utiliza una zona llamada "Stash" para guardar cambios de la zona de trabajo que de momento no seran enviados al STAGE pero pueden ser recuperados posteriormente.

### Git Reset
Recupera el estado de un commit anterior. Dependiendo si se usa --soft, --mixed o --hard los cambios son mantenidos en la zona de trabajo, o borrados.

### Git Branch
Muestra las ramas si se ejecuta sin parametros y crea una rama si se la acompaña de un parametro.
Otras alternativas para crear ramas son (ambas nos mueven a la rama creada) :
 * git checkout -b <rama>
 * git switch -c <rama> 

### Git Checkout 
Sirve tanto para volver un archivo al estado del ultimo commit como para cambiar de rama. En los ultimos años, esta ultima funcion recae en Git Switch.

### Git Alias
Nos permite configurar comando propios a partir de configuracion de alias

### Git Reflog
Dado que el git reset no borra commits, si no referencias a ellos, nos permite recuperar un commit borrado siempre y cuando tenga el hash.

## Fusion de Ramas y conflictos

### Git Rebase
Permite posicionar el HEAD (indicador de donde estoy parado), en un commit anterior, realizar cambios y luego crear nuevos commits.
### Git Merge
Permite fusionar 2 ramas y solucionar los conflictos cuando ambas ramas cambiaron un archivo. 
### Git Cherry-Pick
Permite fusionar 2 ramas indicando que commits de cada una conservar.


## Remoto

Usamos git pull y git push para traer o enviar cambios

### Git Restore 
Recupera el estado anterior de un archivo. Si se acompaña con --staged, saca del estage los cambios añadidos.

## Fuentes 
 * https://youtu.be/9ZJ-K-zk_Go (Soy Dalto - Curso de Git)
 * https://www.youtube.com/watch?v=3GymExBkKjE (Mouere - DEV - Mas completo pero mas lento)

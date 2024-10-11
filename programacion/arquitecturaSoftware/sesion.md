# Sesion


## Inicion de Sesion

El iniciar una sesion es una de las caracterisiticas mas comunes en una web. 
La forma tradicional, consistia en que el servidor guarda la sesion, mientras que en la forma moderna , en cambio se envia la sesion al usuario. El servidor solo valida. 

### JWT
Usa la forma moderna de inicio de sesion, pero en lugar de enviar la sesion al usuario se envia el JWT. Al igual que con la sesion, el servidor crea el JWT y luego lo valida.

## Guardado de la sesion
Con el metodo moderno de logueo, se requiere que el cliente(navegador) guarde la sesion (o JWT) para esto utilizara:
* Storage Local
* Cookie
* Storage de Sesion (Session storage)

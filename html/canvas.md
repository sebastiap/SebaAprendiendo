# Canvas

```<canvas>``` es un elemento HTML el cual puede ser usado para dibujar gráficos usando scripts (normalmente JavaScript).
 Este puede, por ejemplo, ser usado para dibujar gráficos, realizar composición de fotos o simples (y no tan simples) animaciones. 
 
 ## Generalidades
 Usar el elemento <canvas> no es algo muy díficil pero necesita saber y entender los aspectos básicos del HTML y JavaScript. El elemento <canvas> no está soportado en navegadores viejos, pero está soportado en la mayoría de las versiones más recientes de los navegadores. 
  
 ## Propiedades 
 El tamaño por defecto del canvas es 300px * 150px [ancho (width) * alto (height)]. Pero se puede personalizar el tamaño usando las propiedades height y width de CSS. Con el fin de dibujar gráficos en el lienzo <canvas> se utiliza un objeto de contexto de JavaScript que crea gráficos sobre la marcha.
 
 ## Fallback (O plan B ante no compatibilidad)
 Canvas no funciona en navegadores viejos, por lo que se debe establecer un fallback o plan alternativo, para los casos que no pueda ser renderizado. Todo lo que esta encerrado entre los tags de canvas, sera tenido en cuenta como este fallback, es por esto que cambas siempre debe declararse con las 2 etiquetas y no puede ser simplificado con la barra como en ```<img>``` .
 
 ```
 <canvas id="clock" width="150" height="150">
  <img src="images/clock.png" width="150" height="150" alt=""/>
</canvas>
 ```
 
 ## Diferencias con img
 Podemos pensar a canvas como un lienzo vacio. Es como crear una imagen en blanco. A diferencia de ```<img>``` , no tiene atributos src ya que espera que el dibujo se realice mediante javascript. Los unicos atributos que se pasan al tag , son id (para identificarlo en javascript) , width y height (para definir dimensiones distintas a las que vienen por defecto).

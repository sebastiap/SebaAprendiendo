package practice;

public class Personaje {
    public String getNombre() {
        return nombre;
    }

    public Integer getVida_min() {
        return vida_min;
    }

    public Integer getVida_max() {
        return vida_max;
    }

    private String nombre;
    private Integer vida_min;
    private Integer vida_max;
    public String presentarse (){
        return "Soy un personaje";
    }

    public Personaje(String nombre,Integer min,Integer max){
        this.nombre = nombre;
        this.vida_min = min;
        this.vida_max=max;
    }


}


// Clase Hija 
package practice;

// extends indica que heredo de una clase padre
public class Protagonista extends Personaje {
    //private String nombre;
    private String apellido;

    public Protagonista(String nombre,Integer min,Integer max,String Apellido){
        // super asigna la informacion heredada
        super(nombre,min,max);
        this.apellido = Apellido;
    }
    // Esto es polimorfismo
    // Sobreescribo el comportamiento de presentarse con un comportamiento propio
    @Override
    public String presentarse (){
        return "Soy un el protagonista,"  + this.getNombre() + " " +  this.apellido;
    }
}


package sebastiap.movies.service;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.time.ZoneId;

// Este es un componente que planificara tareas
@Component
public class ScheduleTask {
    /*fixedRate ejecuta a intervalos fijos desde el inicio de la aplicacion (Ejecuta ignorando los delays)
    fixedDelay ejecuta a intervalos fijos desde el final de la ejecucion de la tarea croneada
    initialDelay, retrasa la primera ejecucion
    cron: ejecuta segun una expresion cron (Igual que crontab de Linux)
    zone: especifica una zona horaria segun cron, para ejecutar en crones que dependan de horas o dias especificos.

     */
    @Scheduled(fixedRate = 5000,initialDelay = 3000)
    public void imprimirCadaXtiempo(){
        System.out.println("Estoy escribiendo algo cada X tiempo.");
        // Si pusiera un delay lo ignoraria
        // E.G: Thread.sleep(5000);
    }
    // Como tiene delay correra cada 10 segundos en lugar de cada 10
    @Scheduled(fixedDelay = 5000)
    public void imprimirLuegoDeXtiempo() throws  InterruptedException{
        System.out.println("Estoy escribiendo luego de X tiempo.");
        Thread.sleep(5000);
    }

    // Ejecuta con cron, cada 5 minutos
    // Ayudarnos con https://crontab.cronhub.io/
    // Espera 6 digitos, si falta uno , agregar un 0 al principio.
    @Scheduled(cron = "*/5 * * * * *", zone = "America/Argentina/Buenos_Aires")
    public void imprimirCroneado() throws  InterruptedException{
        System.out.println("Estoy escribiendo luego de X tiempo.");
        Thread.sleep(5000);
    }

    // Obtiene todas las zonas horarios
    public static void main(String[] args) {
        ZoneId.getAvailableZoneIds().forEach(System.out::println);
    }
}

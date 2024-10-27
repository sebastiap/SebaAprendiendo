package sebastiap.movies;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RestController;

// Con esta anotacion habilitamos la programacion de tareas en SpringBoot
@EnableScheduling
//@SpringBootApplication es una anotación que aparece en la función main de todo proyecto que definamos con Spring Boot
// https://www.arquitecturajava.com/springbootapplication-una-anotacion-clave/
@SpringBootApplication
//@RestController
public class MoviesApplication {

	public static void main(String[] args) {
		SpringApplication.run(MoviesApplication.class, args);
	}


//	@GetMapping("/")
//	public String apiRoot(){
//		return "Hello World";
//	}
}

package sebastiap.movies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sebastiap.movies.service.MovieService;

import java.util.List;
import java.util.Optional;
// Agrego esto para evitar el CORS al probar localmente
@CrossOrigin(origins = "*")
//una clase que use la anotación @RestController y automaticamente se publicara como un  Spring REST Service
@RestController
// Le indicamos a que url buscar
@RequestMapping("/api/v1/movies")
public class MovieController {

    // @Autowired hace que no necesitemos inicializar  la conexion con el servicio
    //@Autowired es la anotación que permite inyectar unas dependencias con otras dentro de Spring
    @Autowired
    private MovieService movieService;
    @GetMapping
    public ResponseEntity<List<Movie>> allMovies(){
        return new ResponseEntity<List<Movie>>( movieService.AllMovies(), HttpStatus.OK);
    }

    @GetMapping("/{imdnid}")
    public ResponseEntity<Optional<Movie>> getSingleMovie(@PathVariable String imdnid){
        return new ResponseEntity<Optional<Movie>>( movieService.singleMovie(imdnid), HttpStatus.OK);
    }
}

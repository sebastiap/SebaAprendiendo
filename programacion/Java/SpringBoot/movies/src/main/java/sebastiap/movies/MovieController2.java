package sebastiap.movies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sebastiap.movies.service.MovieService;

import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "*")
//una clase que use la anotación @RestController y automaticamente se publicara como un  Spring REST Service
@RestController
// Le indicamos a que url buscar
@RequestMapping("/api/v1/movies2")
public class MovieController2 {

    List<Movie> movies ;
    @Autowired
    private MovieService movieService;
    @GetMapping
    public ResponseEntity<List<Movie>> allMovies(){
        return new ResponseEntity<List<Movie>>( movies, HttpStatus.OK);
    }

    @GetMapping("/{imdnid}")
    public ResponseEntity<Optional<Movie>> getSingleMovie(@PathVariable String imdnid){
        return new ResponseEntity<Optional<Movie>>( movieService.singleMovie(imdnid), HttpStatus.OK);
    }
}

package sebastiap.movies.service;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import sebastiap.movies.Movie;
import sebastiap.movies.MovieRepository;

import java.util.List;
import java.util.Optional;
// Con esta anotacion avisamos que esta clase sera parte de la capa de servicios
// Controller - Service - Repository
@Service
public class MovieService {
    //Hay que inicializar
    // Usamos la anotacion @Autowired para que java instancie esta clase por nosotros
    @Autowired
    private MovieRepository movieRepository;
    public List<Movie> AllMovies(){
        return movieRepository.findAll();
    }
    public Optional<Movie> singleMovie(String imdnid){
        return movieRepository.findMovieByImdbId(imdnid);
    }
}

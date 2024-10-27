package sebastiap.movies;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;



// Con esta anotacion le aclaramos que es un repositorio y extendemos la clase MongoRepository para aclararle
// que es de Mongo
@Repository
public interface MovieRepository extends MongoRepository<Movie, ObjectId> {

    Optional<Movie> findMovieByImdbId(String ImdbId);
}

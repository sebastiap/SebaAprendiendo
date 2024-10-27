package sebastiap.movies;

import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;
//@Document define a esta clase como una entidad Documento (De una base de datos no relacional), aclarando que corresponde a la coleccion
// movies
@Document(collection = "movies")
// Lombok nos da esta Anotacion para evitar poner las clases getter y setters de cada propiedad
@Data
// Lombok nos da esta Anotacion para evitar definir los constructores de cada propiedad y de cuando venga vacio
@AllArgsConstructor
@NoArgsConstructor
public class Movie {
    // esta propiedad es el identificador numero
    @Id
    private ObjectId id;
    private String imdbId;
    private String title;
    private String releaseDate;
    private String trailerLink;
    private String poster;
    private List<String> backdrops;
    private List<String> genres;
    @DocumentReference
    private List<Review> reviews;
}

package sebastiap.movies.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;
import sebastiap.movies.Movie;
import sebastiap.movies.MovieRepository;
import sebastiap.movies.Review;
import sebastiap.movies.ReviewRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;
    @Autowired
    private MongoTemplate mongoTemplate;
    public Review createReview(String reviewBody, String imdbId){
        Review review = new Review(reviewBody);
        reviewRepository.insert(review);
        mongoTemplate.update(Movie.class)
                .matching(Criteria.where("ImdbId").is(imdbId))
                .apply(new Update().push("reviewIds").value(review))
                .first();

        return review;
    }
    @Autowired
    private MovieRepository movieRepository;
    public List<Movie> AllMovies(){
        return movieRepository.findAll();
    }
    public Optional<Movie> singleMovie(String imdnid){
        return movieRepository.findMovieByImdbId(imdnid);
    }
}

import type { movieDTO, movieListDTO } from "./movie.model";
import GenericList from "../../components/common/GenericList";
import IndividualMovie from "./IndividualMovie";
import './MovieList.css';

function MovieList({ movies }: movieListDTO) {
    return (
        <GenericList
            list={movies}>
            <div className='movieListBlock'>
                {movies?.map((movie: movieDTO) => 
                    <IndividualMovie key={movie.id} {...movie} />)}
            </div>
        </GenericList>
    )
}

export default MovieList;

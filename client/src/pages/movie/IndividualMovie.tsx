import type { movieDTO } from './movie.model';
import './IndividualMovie.css';

function IndividualMovie({ id, title, poster }: movieDTO) {
    return (
        <a href={`/movie/${id}`} className='individualMovie'>
            <div>
                <img src={poster} alt='poster' />
            </div>
            <p>{title}</p>
        </a>
    );
}

export default IndividualMovie;

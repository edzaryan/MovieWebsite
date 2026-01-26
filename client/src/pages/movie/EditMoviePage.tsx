// import { useParams } from "react-router-dom";
import type { actorMovieDTO } from "../actor/actor.model";
import type { genreDTO } from "../genre/genre.model";
import type { movieTheaterDTO } from "../movietheater/movieTheater.model";
import MovieForm from "./MovieForm";

function EditMoviePage() {
    // const { id } = useParams();

    const nonSelectedGenres: genreDTO[] = [{ id: 1, name: 'Comedy' }];
    const selectedGenres: genreDTO[] = [{ id: 2, name: 'Drama' }];

    const selectedMovieTheaters: movieTheaterDTO[] = [{ id: 1, name: 'Sambil' }];
    const nonSelectedMovieTheaters: movieTheaterDTO[] = [{ id: 2, name: 'Agora' }];

    const selectedActors: actorMovieDTO[] = [
        { 
            id: 1, 
            name: 'Tom Holland', 
            character: 'Geralt', 
            picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe4pq4DVlzBV5uDWNCgrAGhz_alNCtYqrpsw&s' 
        }
    ];
     
    return (
        <div>
            <h3>Edit Movie Page</h3>
            <MovieForm
                model={{
                    title: 'Toy Story',
                    inTheaters: true,
                    trailer: 'https://www.youtube.com/watch?v=2BlMNH1QTeE',
                    releaseDate: new Date('2026-01-01T00:00:00'),
                    poster: undefined,
                    posterURL: '',
                    actors: []
                }}
                onSubmit={async (value) => {
                    await new Promise(r => setTimeout(r, 1000));
                    console.log(value);
                }}
                selectedGenres={selectedGenres}
                nonSelectedGenres={nonSelectedGenres}
                selectedMovieTheaters={selectedMovieTheaters}
                nonSelectedMovieTheaters={nonSelectedMovieTheaters}
                selectedActors={selectedActors}
            />
        </div>
    );
}

export default EditMoviePage;
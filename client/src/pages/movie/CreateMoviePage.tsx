import type { genreDTO } from "../genre/genre.model";
import type { movieTheaterDTO } from "../movietheater/movieTheater.model";
import MovieForm from "./MovieForm";

function CreateMoviePage() {

    const nonSelectedGenres: genreDTO[] = [
        { id: 1, name: 'Comedy' },
        { id: 2, name: 'Drama' }
    ];
    const nonSelectedMovieTheaters: movieTheaterDTO[] = [
        { id: 1, name: 'Sambil' },
        { id: 2, name: 'Agora' }
    ];

    return (
        <div>
            <h3>Create Movie</h3>
            <MovieForm
                model={{
                    title: '',
                    inTheaters: false,
                    trailer: '',
                    releaseDate: undefined,
                    poster: undefined,
                    posterURL: '',
                    actors: []
                }}
                onSubmit={async (value) => {
                    await new Promise(r => setTimeout(r, 1000));
                    console.log(value);
                }}
                nonSelectedGenres={nonSelectedGenres}
                selectedGenres={[]}
                nonSelectedMovieTheaters={nonSelectedMovieTheaters}
                selectedMovieTheaters={[]} 
                selectedActors={[]}
            />
        </div>
    );
}

export default CreateMoviePage;
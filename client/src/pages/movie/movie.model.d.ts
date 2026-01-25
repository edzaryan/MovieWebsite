import type { actorMovieDTO } from "../actor/actor.model";

export interface movieDTO {
    id: number;
    title: string;
    poster: string;
}

export interface landingPageDTO {
    inTheaters?: movieDTO[];
    upcomingReleases?: movieDTO[];
}

export interface movieListDTO {
    movies?: movieDTO[];
}

export interface movieCreationDTO {
    title: string;
    inTheaters: boolean;
    trailer: string;
    releaseDate?: Date;
    poster?: File;
    posterURL?: string;
    genresIds?: number[];
    movieTheatersIds?: number[];
    actors?: actorMovieDTO[];
}
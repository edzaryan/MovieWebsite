import CreateMovieTheaterPage from "../pages/movietheater/CreateMovieTheater";
import EditMovieTheaterPage from "../pages/movietheater/EditMovieTheater";
import MovieTheaterPage from "../pages/movietheater/MovieTheater";
import CreateActorPage from "../pages/actor/CreateActorPage";
import CreateGenrePage from "../pages/genre/CreateGenrePage";
import EditActorPage from "../pages/actor/EditActorPage";
import RootLayout from "../components/layout/RootLayout";
import EditGenrePage from "../pages/genre/EditGenrePage";
import { createBrowserRouter } from "react-router-dom";
import ActorPage from "../pages/actor/ActorPage";
import GenrePage from "../pages/genre/GenrePage";
import HomePage from "../pages/home/HomePage";
import FilterMoviePage from "../pages/movie/FilterMoviePage";
import CreateMoviePage from "../pages/movie/CreateMoviePage";
import EditMoviePage from "../pages/movie/EditMoviePage";
import NotFoundPage from "../pages/notfound/NotFoundPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { index: true, element: <HomePage /> },

            { path: 'genre', element: <GenrePage /> },
            { path: 'genre/create', element: <CreateGenrePage /> },
            { path: 'genre/edit/:id', element: <EditGenrePage /> },

            { path: 'actor', element: <ActorPage /> },
            { path: 'actor/create', element: <CreateActorPage /> },
            { path: 'actor/edit/:id', element: <EditActorPage /> },

            { path: 'movietheater', element: <MovieTheaterPage /> },
            { path: 'movietheater/create', element: <CreateMovieTheaterPage /> },
            { path: 'movietheater/edit/:id', element: <EditMovieTheaterPage /> },

            { path: 'movie/filter', element: <FilterMoviePage /> },
            { path: 'movie/create', element: <CreateMoviePage /> },
            { path: 'movie/edit/:id', element: <EditMoviePage /> },

            { path: '*', element: <NotFoundPage /> }
        ]
    }
]);
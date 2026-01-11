import type { landingPageDTO } from "../movie/movie.model";
import MovieList from "../movie/MovieList";
import { useEffect, useState } from "react";

function HomePage() {
    const [data, setData] = useState<landingPageDTO>({});

    useEffect(() => {
        const timerId = setTimeout(() => {
        setData({
                inTheaters: [
                {
                    id: 1,
                    title: 'American Beauty',
                    poster: 'https://m.media-amazon.com/images/M/MV5BMDI1MDE0OTMtMmI2MS00Yjc2LTg2MTItMWExYTg5NzA1OGUzXkEyXkFqcGc@._V1_.jpg'
                },
                {
                    id: 2,
                    title: 'Luca',
                    poster: 'https://m.media-amazon.com/images/M/MV5BMWMyNGNlZTktODVkNS00ZmMyLTk0NmUtNWVjOWU1MWMzZGMzXkEyXkFqcGc@._V1_.jpg'
                },
                {
                    id: 3,
                    title: 'Braveheart',
                    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6G6dpZXPHquS5ai9AZuddGl2vxGkADWlTgSVcm86UC93BLb_knxO36L-Lws4m8__22ZbNsA&s=10'
                },
                ],
                upcomingReleases: [
                {
                    id: 10,
                    title: 'Gladiator',
                    poster: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Gladiator_%282000_film_poster%29.png'
                },
                {
                    id: 11,
                    title: 'Birdman',
                    poster: 'https://upload.wikimedia.org/wikipedia/en/6/63/Birdman_poster.png'
                },
                {
                    id: 12,
                    title: 'The Matrix',
                    poster: 'https://upload.wikimedia.org/wikipedia/en/d/db/The_Matrix.png'
                },
                ]
            });

        return () => clearTimeout(timerId);
        }, 1000);
        
    }, []);
  
    return (
        <>
            <div>
                <h4>In Theaters</h4>
                <MovieList movies={data?.inTheaters} />
            </div>
            <div>
                <h4>Upcoming Movies</h4>
                <MovieList movies={data?.upcomingReleases} />
            </div>
        </>
    )
}

export default HomePage;
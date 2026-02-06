import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios, { type AxiosResponse } from "axios";
import type { genreDTO } from "./genre.model";
import { urlGenres } from "../../endpoints.ts";

function GenrePage() {

    useEffect(() => {
        axios
            .get(urlGenres)
            .then((response: AxiosResponse<genreDTO[]>) => {
                console.log(response.data);
            })
    }, []);

    return (
        <div>
            <h3>Genre List</h3>
            <Link to='/genre/create' className='btn btn-primary'>Create Genre</Link>
        </div>
    ) 
}

export default GenrePage;
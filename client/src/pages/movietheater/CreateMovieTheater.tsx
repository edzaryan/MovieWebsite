import { Link } from "react-router-dom";

function CreateMovieTheaterPage() {
    return (
        <>
            <h3>CreateMovieTheaterPage Page</h3>
            <Link to='/movietheater/create' className='btn btn-primary'>Create MovieTheater</Link>
        </>
    )
}

export default CreateMovieTheaterPage;
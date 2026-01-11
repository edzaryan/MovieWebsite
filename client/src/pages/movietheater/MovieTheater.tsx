import { Link } from "react-router-dom";

function MovieTheaterPage() {
    return (
        <>
            <h3>MovieTheater Page</h3>
            <Link to='/movietheater/create' className='btn btn-primary'>Create MovieTheater</Link>
        </>
    )
}

export default MovieTheaterPage;
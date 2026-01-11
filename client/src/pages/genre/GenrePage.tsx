import { Link } from "react-router-dom";

function GenrePage() {
    return (
        <div>
            <h3>Genre List</h3>
            <Link to='/genre/create' className='btn btn-primary'>Create Genre</Link>
        </div>
    ) 
}

export default GenrePage;
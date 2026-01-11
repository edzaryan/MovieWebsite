import { Link, useParams } from "react-router-dom";

function EditMovieTheaterPage() {
    const { id }: any = useParams();
    
    return (
        <>
            <h3>Edit MovieTheater Page</h3>
            <Link to='/movietheater/edit/12' className='btn btn-primary'>Edit MovieTheater</Link>
        </>
    )
}

export default EditMovieTheaterPage;
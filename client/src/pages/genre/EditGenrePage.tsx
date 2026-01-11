import { Link, useParams } from "react-router-dom";

function EditGenrePage() {
    const { id }: any = useParams(); 
    
    return (
        <>
            <h3>Edit Genre</h3>
            <Link to='/genre/create' className='btn btn-primary'>Edit Genre</Link>
        </>
    )
}

export default EditGenrePage;
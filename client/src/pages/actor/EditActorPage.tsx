import { Link, useParams } from "react-router-dom";

function EditActorPage() {
    const { id }: any = useParams();
    
    return (
        <>
            <h3>Edit Actor</h3>
            <Link to='/actor/create' className='btn btn-primary'>Edit Actor</Link>
        </>
    )
}

export default EditActorPage;
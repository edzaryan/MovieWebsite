import { Link } from "react-router-dom";

function CreateActorPage() {
    return (
        <>
            <h3>Create Actor</h3>
            <Link to='/actor/create' className='btn btn-primary'>Create Actor</Link>
        </>
    )
}

export default CreateActorPage;
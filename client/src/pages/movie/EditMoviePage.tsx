import { useParams } from "react-router-dom";

function EditMoviePage() {
    const { id }: any = useParams();
    
    return (
        <div>
            <h2>Edit Movie Page</h2>
        </div>
    );
}

export default EditMoviePage;
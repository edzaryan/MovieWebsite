import MovieTheaterForm from "./MovieTheaterForm";
import { useParams } from "react-router-dom";

function EditMovieTheaterPage() {
    const { id }: any = useParams();
    
    return (
        <>
            <h3>Edit Movie Theater</h3>
            <MovieTheaterForm
                model={{ name: 'Sambil', latitude: 80, longitude: 80 }}
                onSubmit={async value => {
                    await new Promise(r => setTimeout(r, 1000));
                    console.log(value);
                }} 
            />
        </>
    )
}

export default EditMovieTheaterPage;
import { useParams } from 'react-router-dom';
import GenreForm from './GenreForm';

function EditGenrePage() {
    const { id }: any = useParams(); 
    
    return (
        <>
            <h3>Edit Genre</h3>
            
            <GenreForm 
                model={{ name: 'Edgar' }} 
                onSubmit={async value => {
                    await new Promise(r => setTimeout(r, 1000));
                    console.log(value);
            }} />
        </>
    )
}

export default EditGenrePage;
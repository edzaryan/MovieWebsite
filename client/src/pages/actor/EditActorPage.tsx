// import { useParams } from "react-router-dom";
import ActorForm from "./ActorForm";

function EditActorPage() {
    // const { id }: any = useParams();
    
    return (
        <>
            <h3>Edit Actor</h3>
            <ActorForm 
                model={{ 
                    name: 'Adam', 
                    dateOfBirth: new Date('1993-07-04T00:00:00'), 
                    biography: `# Something
This person was born in **RD**`,
                    pictureURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTew-f0WBBjSOu9YTVDwO46wmf841dRaCImopTrsbRk8-V4knGuvddCoArqsulTXQ-XNnBTCJvF-X0AhPcUO3zSEl0keI9lcce-u5AN-w&s=10' 
                }} 
                onSubmit={values => console.log(values)}
            />
        </>
    )
}

export default EditActorPage;
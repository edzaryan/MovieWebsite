import ActorForm from "./ActorForm";

function CreateActorPage() {
    return (
        <>
            <h3>Create Actor</h3>
            <ActorForm 
                model={{ name: '', dateOfBirth: undefined }} 
                onSubmit={async value => {
                    await new Promise(r => setTimeout(r, 1000));
                    console.log(value);
                }} 
            />
        </>
    )
}

export default CreateActorPage;
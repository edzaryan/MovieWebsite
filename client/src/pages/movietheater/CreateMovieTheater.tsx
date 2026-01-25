import MovieTheaterForm from "./MovieTheaterForm";

function CreateMovieTheaterPage() {
    return (
        <>
            <h3>Create MovieTheater</h3>
            <MovieTheaterForm
                model={{ name: '' }}
                onSubmit={async value => {
                    await new Promise(r => setTimeout(r, 1000));
                    console.log(value);
                }} 
            />
        </>
    )
}

export default CreateMovieTheaterPage;
import MultipleSelector, { type multipleSelectorModel } from '../../components/form/MultipleSelector';
import type { movieTheaterDTO } from '../movietheater/movieTheater.model';
import TypeAheadActors from '../../components/form/TypeAheadActors';
import CheckboxField from '../../components/form/CheckboxField';
import { Form, Formik, type FormikHelpers } from "formik";
import ImageField from "../../components/form/ImageField";
import type { actorMovieDTO } from '../actor/actor.model';
import TextField from "../../components/form/TextField";
import DateField from "../../components/form/DateField";
import type { movieCreationDTO } from "./movie.model";
import type { genreDTO } from '../genre/genre.model';
import Button from "../../components/ui/Button";
import { Link } from "react-router-dom";
import { useState } from 'react';
import * as Yup from 'yup';

interface movieFormProps {
    model: movieCreationDTO;
    onSubmit(values: movieCreationDTO, actions: FormikHelpers<movieCreationDTO>): void;
    selectedGenres: genreDTO[];
    nonSelectedGenres: genreDTO[];
    selectedMovieTheaters: movieTheaterDTO[];
    nonSelectedMovieTheaters: movieTheaterDTO[];
    selectedActors: actorMovieDTO[];
}

function MovieForm({ 
    model, onSubmit, selectedGenres, nonSelectedGenres, selectedMovieTheaters, nonSelectedMovieTheaters, selectedActors
}: movieFormProps) {
    const [selGenres, setSelGenres] = useState<multipleSelectorModel[]>(mapToModel(selectedGenres));
    const [nonSelGenres, setNonSelGenres] = useState<multipleSelectorModel[]>(mapToModel(nonSelectedGenres));

    const [selMovieTheaters, setSelMovieTheaters] = useState<multipleSelectorModel[]>(mapToModel(selectedMovieTheaters));
    const [nonSelMovieTheaters, setNonSelMovieTheaters] = useState<multipleSelectorModel[]>(mapToModel(nonSelectedMovieTheaters));

    const [selActors, setSelActors] = useState<actorMovieDTO[]>(selectedActors);
    
    function mapToModel(items: { id: number, name: string }[]): multipleSelectorModel[] {
        return items.map(item => {
            return { key: item.id, value: item.name }
        });
    }

    return (
        <Formik
            initialValues={model}
            onSubmit={async (values, actions) => {
                values.genresIds = selGenres.map(item => item.key);
                values.movieTheatersIds = selMovieTheaters.map(item => item.key);
                values.actors = selActors;

                return onSubmit(values, actions);
            }}
            validationSchema={Yup.object({
                title: Yup.string().required('Title is required').firstLetterUppercase(),
                trailer: Yup.string().required('Trailer is required')
            })}
        >
            {(formikProps) => (
                <Form>
                    <TextField field='title' displayName='Title' />
                    <CheckboxField field='inTheaters' displayName='In Theaters' />
                    <TextField field='trailer' displayName='Trailer' />
                    <DateField field='releaseDate' displayName='Release Date' />
                    <ImageField field='poster' displayName='Poster' pictureURL={model.posterURL as string} />

                    <MultipleSelector 
                        displayName='Genres'
                        selected={selGenres}
                        nonSelected={nonSelGenres}
                        onChange={(selected, nonSelected) => {
                            setSelGenres(selected);
                            setNonSelGenres(nonSelected);
                        }}
                    />

                    <MultipleSelector 
                        displayName='Movie Theaters'
                        selected={selMovieTheaters}
                        nonSelected={nonSelMovieTheaters}
                        onChange={(selected, nonSelected) => {
                            setSelMovieTheaters(selected);
                            setNonSelMovieTheaters(nonSelected);
                        }}
                    />

                    <TypeAheadActors 
                        displayName='Actors' 
                        actors={selActors} 
                        onAdd={actors => setSelActors(actors)}
                        onRemove={actor => {
                            const actors = selActors.filter(x => x.id !== actor.id);
                            setSelActors(actors);
                        }}
                        listUI={(actor: actorMovieDTO) => 
                            <>
                                {actor.name} /{' '}
                                <input 
                                    placeholder='Character' 
                                    type='text' 
                                    value={actor.character} 
                                    onChange={e => {
                                        const index = selActors.findIndex(x => x.id === actor.id);
                                        const actors = [...selActors];
                                        actors[index] = { ...actors[index], character: e.target.value };
                                        setSelActors(actors);
                                    }} 
                                />
                            </>
                        }
                    />

                    <div className='d-flex justify-content-end'>
                        <Link className='btn btn-secondary me-3' to='/movie'>Cancel</Link>
                        <Button disabled={formikProps.isSubmitting} type='submit'>Save Changes</Button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default MovieForm;
import TextField from "../../components/form/TextField";
import { nameSchema } from "../../validation/schemas";
import type { genreCreationDTO } from "./genre.model";
import Button from "../../components/ui/Button";
import { Link } from "react-router-dom";
import { Form, Formik, type FormikHelpers } from "formik";
import * as Yup from 'yup';

export interface genreFormProps {
    model: genreCreationDTO;
    onSubmit(values: genreCreationDTO, action: FormikHelpers<genreCreationDTO>): void;
}

function GenreForm({ model, onSubmit }: genreFormProps) {
    return (
        <Formik 
            initialValues={model}
            onSubmit={onSubmit}
            validationSchema={Yup.object({
                name: nameSchema
            })}
        >
            {formikProps => (
                <Form>
                    <TextField field='name' displayName='Name' />

                    <div className='d-flex justify-content-end'>
                        <Link to='/genre' className='btn btn-secondary me-3'>Cancel</Link>
                        <Button disabled={formikProps.isSubmitting} type='submit'>Save Changes</Button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default GenreForm;
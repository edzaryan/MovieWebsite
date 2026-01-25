import { Form, Formik, type FormikHelpers } from "formik";
import TextField from "../../components/form/TextField";
import type { genreCreationDTO } from "./genre.model";
import Button from "../../components/ui/Button";
import { Link } from "react-router-dom";
import * as Yup from 'yup';

interface genreFormProps {
    model: genreCreationDTO;
    onSubmit(values: genreCreationDTO, action: FormikHelpers<genreCreationDTO>): void;
}

function GenreForm({ model, onSubmit }: genreFormProps) {
    return (
        <Formik 
            initialValues={model}
            onSubmit={onSubmit}
            validationSchema={Yup.object({
                name: Yup.string().required('Name is required').firstLetterUppercase()
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
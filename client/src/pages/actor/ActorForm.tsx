import MarkdownField from "../../components/form/MarkdownField";
import { Form, Formik, type FormikHelpers } from 'formik';
import ImageField from '../../components/form/ImageField';
import TextField from '../../components/form/TextField';
import DateField from '../../components/form/DateField';
import type { actorCreationDTO } from './actor.model';
import Button from '../../components/ui/Button';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

interface actorFormProps {
    model: actorCreationDTO;
    onSubmit(values: actorCreationDTO, action: FormikHelpers<actorCreationDTO>): void;
}

function ActorForm({ model, onSubmit }: actorFormProps) {
    return (
        <Formik
            initialValues={model}
            onSubmit={onSubmit}
            validationSchema={Yup.object({
                name: Yup.string().required('Name is required').firstLetterUppercase(),
                dateOfBirth: Yup.date().required('Date is required'),
            })}
        >
            {formikProps => (
                <Form>
                    <TextField field='name' displayName='Name' />
                    <DateField field='dateOfBirth' displayName='Date of Birth' />
                    <ImageField field='picture' displayName='Picture' pictureURL={model.pictureURL as string} />
                    <MarkdownField field='biography' displayName='Biography' /> 
                    
                    <div className='d-flex justify-content-end'>
                        <Link to='/actor' className='btn btn-secondary me-3'>Cancel</Link>
                        <Button disabled={formikProps.isSubmitting} type='submit'>Save Changes</Button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default ActorForm;
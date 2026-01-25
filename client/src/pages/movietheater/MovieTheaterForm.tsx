import type coordinateDTO from '../../components/common/map/coordinates.model';
import type { movieTheaterCreationDTO } from './movieTheater.model';
import MapField from '../../components/common/map/Mapfield';
import { Form, Formik, type FormikHelpers } from 'formik';
import TextField from '../../components/form/TextField';
import Button from '../../components/ui/Button';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

interface movieTheaterForm {
    model: movieTheaterCreationDTO;
    onSubmit(values: movieTheaterCreationDTO, actions: FormikHelpers<movieTheaterCreationDTO>): void;
}

function MovieTheaterForm({ model, onSubmit }: movieTheaterForm) {

    function transformCoordinates(): coordinateDTO[] {
        if (model.latitude && model.longitude) {
            const response: coordinateDTO = { lat: model.latitude, lng: model.longitude };
            return [response];
        }

        return [];
    }
 
    return (
        <Formik
            initialValues={model}
            onSubmit={onSubmit}
            validationSchema={Yup.object({
                name: Yup.string().required('Name is required').firstLetterUppercase(),
            })}
        >
            {(formikProps) => (
                <Form>
                    <TextField field='name' displayName='Name' />

                    <div style={{ marginBottom: '1rem' }}>
                        <MapField latField='latitude' lngField='longitude' coordinates={transformCoordinates()} />
                    </div>

                    <div className='d-flex justify-content-end'>
                        <Link className='btn btn-secondary me-3' to='/movietheater'>Cancel</Link>
                        <Button disabled={formikProps.isSubmitting} type='submit'>Save Changes</Button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default MovieTheaterForm;
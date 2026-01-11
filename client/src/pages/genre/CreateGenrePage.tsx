import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import { Form, Field, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function CreateGenrePage() {
    const navigate = useNavigate();

    return (
        <>
            <h3>Create Genre</h3>

            <Formik 
                initialValues={{ name: '' }}
                onSubmit={values => {
                    console.log(values);
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required('This field is required')
                })}
            >
                <Form>
                    <div className='d-flex justify-content-end'>
                        <Link to='/genres' className='btn btn-secondary me-3'>Cancel</Link>
                        <Button type='submit'>Save Changes</Button>
                    </div>
                </Form>
            </Formik>
        </>
    )
}

export default CreateGenrePage;

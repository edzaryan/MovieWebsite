import { ErrorMessage, Field } from "formik";

function TextField() {
    return (
        <div className='form-group mb-3'>
            <label htmlFor='name'>Name</label>
            <Field name='name' id='name' className='form-control mt-1' />
            <ErrorMessage name='name'>
                {msg => <div className='text-danger'>{msg}</div>}                        
            </ErrorMessage>
        </div>
    )
}

export default TextField;
import { ErrorMessage, Field } from 'formik';

interface textFieldProps {
    field: string;
    displayName: string;
}

function TextField({ field, displayName }: textFieldProps) {
    return (
        <div className='form-group mb-3'>
            <label htmlFor={field}>{displayName}</label>
            <Field name={field} id={field} className='form-control mt-1' />
            <ErrorMessage name={field}>
                {msg => <div className='text-danger'>{msg}</div>}                        
            </ErrorMessage>
        </div>
    )
}

export default TextField;
import { Field } from "formik";

interface checkboxFieldProps {
    field: string;
    displayName: string;
}

function CheckboxField({ field, displayName }: checkboxFieldProps) {
    return (
        <div className='mb-3 form-check'>
            <Field className='form-check-input' id={field} name={field} type='checkbox' />
            <label htmlFor={field}>{displayName}</label>
        </div>
    )
}

export default CheckboxField;
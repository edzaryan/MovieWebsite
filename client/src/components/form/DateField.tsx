import { useFormikContext } from "formik";

interface DateFieldProps {
  field: string;
  displayName: string;
}

function DateField({ field, displayName }: DateFieldProps) {
  const { values, setFieldValue, touched, errors } = useFormikContext<any>();

  return (
    <div className="mb-3">
      <label htmlFor={field} className="form-label">
        {displayName}
      </label>

      <input
        type="date"
        className="form-control"
        id={field}
        name={field}
        value={
          values[field]
            ? new Date(values[field]).toISOString().slice(0, 10)
            : ""
        }
        onChange={(e) => {
          const date = e.target.value
            ? new Date(e.target.value + "T00:00:00Z")
            : null;

          setFieldValue(field, date);
        }}
      />

      {touched[field] && errors[field] && (
        <div className="text-danger">
          {errors[field].toString()}
        </div>
      )}
    </div>
  );
}

export default DateField;

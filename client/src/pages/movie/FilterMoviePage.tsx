import { Field, Form, Formik } from "formik";
import type { genreDTO } from "../genre/genre.model";
import Button from "../../components/ui/Button";

interface FilterMoviesFormProps {
  title: string;
  genreId: number;
  upcomingReleases: boolean;
  inTheaters: boolean;
}

function FilterMoviePage() {
  const initialValues: FilterMoviesFormProps = {
    title: "",
    genreId: 0,
    upcomingReleases: false,
    inTheaters: false,
  };

  const genres: genreDTO[] = [
    { id: 1, name: "Drama" },
    { id: 2, name: "Action" },
  ];

  return (
    <div>
        <h3>Filter Movie Page</h3>

        <Formik initialValues={initialValues} onSubmit={(values) => console.log(values)}>
            {(formikProps) => (
                <Form>
                    <div className="row gx-3 align-items-center">
                        <div className="col-auto">
                            <input
                                className="form-control"
                                id="title"
                                placeholder="Title of the movie"
                                {...formikProps.getFieldProps("title")}
                            />
                        </div>

                        <div className="col-auto">
                            <select
                                className="form-select"
                                id="genreId"
                                name="genreId"
                                value={formikProps.values.genreId}
                                onChange={(e) => formikProps.setFieldValue("genreId", Number(e.target.value))}
                            >
                                <option value={0}>--- Choose a genre ---</option>
                                {genres.map((genre) => (
                                    <option key={genre.id} value={genre.id}>
                                        {genre.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="col-auto">
                            <div className="form-check">
                                <Field
                                    type="checkbox"
                                    className="form-check-input"
                                    id="upcomingReleases"
                                    name="upcomingReleases"
                                />
                                <label className="form-check-label" htmlFor="upcomingReleases">
                                    Upcoming Releases
                                </label>
                            </div>
                        </div>

                        <div className="col-auto">
                            <div className="form-check">
                                <Field
                                    type="checkbox"
                                    className="form-check-input"
                                    id="inTheaters"
                                    name="inTheaters"
                                />
                                <label className="form-check-label" htmlFor="inTheaters">
                                    In Theaters
                                </label>
                            </div>
                        </div>

                        <div className="col-auto">
                            <Button type="submit">Filter</Button>
                            <Button
                                type="button"
                                className="btn-danger ms-3"
                                onClick={() => formikProps.resetForm()}
                            >
                                Clear
                            </Button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    </div>
  )
}

export default FilterMoviePage;

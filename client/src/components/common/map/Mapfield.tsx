import type coordinateDTO from "./coordinates.model";
import { useFormikContext } from "formik";
import Map from "./Map";

interface mapFieldProps {
    coordinates: coordinateDTO[];
    latField: string;
    lngField: string;
}

function MapField({ coordinates = [], latField, lngField }: mapFieldProps) {
    const { values } = useFormikContext<any>();

    function handleMapClick(newCoordinates: coordinateDTO) {
        values[latField] = newCoordinates.lat;
        values[lngField] = newCoordinates.lng;
    }

    return (
        <Map
            coordinates={coordinates}
            handleMapClick={handleMapClick}
        />
    )
}

export default MapField;
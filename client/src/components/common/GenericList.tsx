import type { ReactElement } from "react";
import Loading from "../ui/Loading";

interface genericListProps {
    emptyListUI?: ReactElement;
    loadingUI?: ReactElement;
    children: ReactElement;
    list: any;
}

function GenericList({ list, loadingUI, emptyListUI, children }: genericListProps) {
    if (!list) {
        if (loadingUI) {
            return loadingUI;
        }

        return <Loading />
    } else if (list.length === 0) {
        if (emptyListUI) {
            return emptyListUI;
        }

        return <>There are no elements to display</>
    } 

    return children;
}

export default GenericList;
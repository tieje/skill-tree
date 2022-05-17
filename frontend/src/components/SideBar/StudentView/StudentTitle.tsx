import { useReduxSelector } from "../../../redux/hooks";
import { useGetHexagonByIdQuery } from "../../../redux/api";
import SidebarDisplayTitle from "../SidebarDisplayTitle";

const StudentTitle = () => {
    const hexagonFocused = useReduxSelector(state => state.panMode.hexagonFocused)
    const { data, error, isLoading } = useGetHexagonByIdQuery(String(hexagonFocused.hex_id))
    // functions
    if (isLoading || error) {
        return (
            <>
                <h1 className='text-2xl text-left'>
                    Title
                </h1>
            </>
        )
    }
    return (
        <SidebarDisplayTitle title={data.title} />
    )
}

export default StudentTitle

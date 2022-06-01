import { useReduxSelector } from "../../../redux/hooks";
import { useGetHexagonByIdQuery } from "../../../redux/api";
import SideBarTitleContainer from "../SideBarItem/SideBarTitle/SideBarTitleContainer";

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
    /*
    return (
        <SideBarTitleContainer props={TitleProps} />
    )*/
    return (<div></div>)
}

export default StudentTitle

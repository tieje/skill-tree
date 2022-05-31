import { useReduxSelector } from "../../../redux/hooks";
import { useGetHexagonByIdQuery } from "../../../redux/api";
import SideBarTitleContainer, { SideBarTitleContainerPropsType } from "../SideBarTitleContainer";

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
    const TitleProps: SideBarTitleContainerPropsType = {
        title: data.title
    }
    return (
        <SideBarTitleContainer props={TitleProps} />
    )
}

export default StudentTitle

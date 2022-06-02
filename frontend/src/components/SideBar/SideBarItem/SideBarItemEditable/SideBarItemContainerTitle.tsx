import { ComponentTypes } from "../../../../types/Types"

const SideBarItemContainerTitle = ({ title }: { title: ComponentTypes }) => {
    return (
        <h1 className='text-2xl text-left'>
            {title}
            {title === 'Image Address' ?
                <a href="https://dev.to/tieje/how-to-get-the-url-for-pictures-30o6" className='pl-2 opacity-50'>
                    (what's this?)
                </a>
                : null
            }
        </h1>
    )
}
export default SideBarItemContainerTitle
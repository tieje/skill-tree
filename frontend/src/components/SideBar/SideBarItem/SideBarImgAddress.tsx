const SideBarImgAddress = ({ imageAddress }: { imageAddress?: string }) => {
    return (
        <a
            href={imageAddress}
            className='truncate'
        >
            {!imageAddress ? 'no image provided' : imageAddress}
        </a>
    )
}
export default SideBarImgAddress

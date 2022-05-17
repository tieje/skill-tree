import HomeHexGrid from "./HomeHexGrid"
import HomeSideBar from "./HomeSideBar"
import HomeInfo from "./HomeInfo/HomeInfo"

const HomePage = () => {
    return (
        <main className='bg-stationary-pattern-clinical overflow-x-hidden'>
            <HomeHexGrid />
            <HomeSideBar />
            <HomeInfo />
        </main>
    )
}
export default HomePage

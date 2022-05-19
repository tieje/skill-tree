import HomeHexGrid from "./HomeHexGrid"
import HomeSideBar from "./HomeSideBar"
import HomeInfo from "./HomeInfo/HomeInfo"
import HomeFooter from "./HomeFooter"

const HomePage = () => {
    return (
        <main className='bg-stationary-pattern-clinical overflow-x-hidden'>
            <HomeHexGrid />
            <HomeSideBar />
            <HomeInfo />
            <HomeFooter />
        </main>
    )
}
export default HomePage

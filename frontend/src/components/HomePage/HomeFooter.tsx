import { Link } from "react-router-dom"

const HomeFooter = () => {
    return (
        <footer className='grid gap-2 grid-cols-12 bg-black text-white lg:h-52 h-72 place-content-center lg:text-sm text-2xl text-center'>
            <div className='col-span-3'></div>
            <ul className='grid gap-2 col-span-6 place-content-center'>
                <li>
                    <Link
                        to='/'
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <a href='mailto:tieje@skyskill.tech?subject=skyskill contact'
                    >
                        Contact
                    </a>
                </li>
                <li>
                    <a
                        href='https://github.com/tieje/skill-tree'
                    >
                        Github
                    </a>
                </li>
                <li>
                    <a
                        href='https://thomasjameslibianofrancis.gatsbyjs.io/#project-skill-trees'
                    >
                        Author
                    </a>
                </li>
                <li>
                    <a
                        href='https://www.paypal.com/donate/?business=FMS4B29339JES&no_recurring=0&item_name=I%27m+a+solo+developer+working+to+make+education+more+student-centered+by+making+it+a+more+fun+game+to+play.&currency_code=USD'
                    >
                        Donate
                    </a>
                </li>
            </ul>
            <div className='col-span-3'></div>
            <div className='col-span-3'></div>
            <span className='grid col-span-6 place-content-center'>Thomas Francis, 2022</span>
            <div className='col-span-3'></div>
        </footer>
    )
}
export default HomeFooter

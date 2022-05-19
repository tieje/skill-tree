import sun from '../assets/images/da_sun.jpeg'
import thomas from '../assets/images/Thomas_Paine.jpeg'
import shortcut_example from '../assets/images/shortcuts_example.png'
import skilltree_example from '../assets/images/skilltree_example.png'
import { HomeInfoSectionPropsType } from '../components/HomePage/HomeInfo/HomeInfoSection'
import { HexagonType, PathType } from "../types/Types"
const exampleString = 'example'
const welcomeHex: Partial<HexagonType> = {
    hex_id: 1,
    hex_q: 2,
    hex_r: 1,
    hex_s: -3,
    title: 'Welcome',
    note: `
    The aim of this application is to make education more student-centered by making it a more fun game to play. To this end, Sky Skill will never be a means to measure student ability. Instead, Sky Skill aims to be another avenue for improving the student-teacher feedback loop as well as encouraging students to forge their own educational paths.`,
    hex_string: '2,1,-3',
}

const HomePageHexes: Partial<HexagonType>[] = [
    welcomeHex,
    {
        hex_id: 2,
        hex_q: 3,
        hex_r: 1,
        hex_s: -4,
        title: 'Students',
        note: `Incentives for Students

    • There is a lot to learn out there. A skill tree can help make learning less overwhelming by visualizing the bigger picture.
    • Students can have a central place to access their teacher's notes.
    • Students are empowered to forge their own educational journey by looking ahead of the lesson plan.

Future Features will allow students to:

    • provide quantitative and verbal feedback to teachers to enhance the student-teacher feedback loop.
    • visually keep track of how confident they feel about a subject.
        `,
        hex_string: '3,1,-4',
    },
    {
        hex_id: 3,
        hex_q: 4,
        hex_r: 1,
        hex_s: -5,
        title: 'Teachers',
        note: `Incentives for Teachers

    • Impress your students and colleagues with a visual skill tree of your syllabus or lesson plans.
    • Built with productivity in mind: keyboard shortcuts can be used for almost every action.
    • A visual skill tree can help improve your students's memory of your lessons through loci memory training.[1]

Future Features will allow teachers to:

    • Download their data in the form of a csv file to own your data.
    • Receive quantitative and verbal feedback from students to make the learning process more collaborative.

[1] https://en.wikipedia.org/wiki/Method_of_loci
`,
        hex_string: '4,1,-5'
    },
    {
        hex_id: 4,
        hex_q: 6,
        hex_r: -2,
        hex_s: -4,
        title: 'Donate',
        note: '',
        hex_string: '6,-2,-4'
    },
    {
        hex_id: 5,
        hex_q: 5,
        hex_r: -1,
        hex_s: -4,
        title: 'Github',
        note: '',
        hex_string: '5,-1,-4'
    },
    {
        hex_id: 6,
        hex_q: 6,
        hex_r: -1,
        hex_s: 5,
        title: 'Author',
        note: '',
        hex_string: '6,-1,5'
    },
    {
        hex_id: 7,
        hex_q: 2,
        hex_r: 3,
        hex_s: -5,
        title: exampleString,
        note: `Thomas Paine

        The following is an example passage copied from Wikipedia.

        Thomas Paine (born Thomas Pain;[1] February 9, 1737 [O.S. January 29, 1736][Note 1] – June 8, 1809) was an English-born American political activist, philosopher, political theorist, and revolutionary. He authored Common Sense (1776) and The American Crisis (1776–1783), two of the most influential pamphlets at the start of the American Revolution, and helped inspire the Patriots in 1776 to declare independence from Great Britain.[2] His ideas reflected Enlightenment-era ideals of transnational human rights.[3]

        Born in Thetford, Norfolk, Paine emigrated to the British American colonies in 1774 with the help of Benjamin Franklin, arriving just in time to participate in the American Revolution. Virtually every rebel read (or listened to a reading of) his 47-page pamphlet Common Sense, proportionally the all-time best-selling American title,[4][5] which catalysed the rebellious demand for independence from Great Britain. The American Crisis was a pro-revolutionary pamphlet series. Paine lived in France for most of the 1790s, becoming deeply involved in the French Revolution. He wrote Rights of Man (1791), in part a defense of the French Revolution against its critics. His attacks on Anglo-Irish conservative writer Edmund Burke led to a trial and conviction in absentia in England in 1792 for the crime of seditious libel.
        
        The British government of William Pitt the Younger, worried by the possibility that the French Revolution might spread to Britain, had begun suppressing works that espoused radical philosophies. Paine's work, which advocated the right of the people to overthrow their government, was duly targeted, with a writ for his arrest issued in early 1792. Paine fled to France in September where, despite not being able to speak French, he was quickly elected to the French National Convention. The Girondins regarded him as an ally; consequently, the Montagnards, especially Maximilien Robespierre, regarded him as an enemy.
        
        In December 1793, he was arrested and was taken to Luxembourg Prison in Paris. While in prison, he continued to work on The Age of Reason (1793–1794). James Monroe, a future President of the United States, used his diplomatic connections to get Paine released in November 1794. Paine became notorious because of his pamphlets and attacks on his former allies, who he felt had betrayed him. In The Age of Reason and other writings he advocated Deism, promoted reason and freethought, and argued against institutionalized religions in general and the Christian doctrine in particular.[6][7][8] In 1796, he published a bitter open letter to George Washington, whom he denounced as an incompetent general and a hypocrite. He published the pamphlet Agrarian Justice (1797), discussing the origins of property and introduced the concept of a guaranteed minimum income through a one-time inheritance tax on landowners. In 1802, he returned to the U.S. When he died on June 8, 1809, only six people attended his funeral, as he had been ostracized for his ridicule of Christianity[9] and attacks on the nation's leaders.
`,
        hex_string: '2,3,-5',
        //image_address: 'https://totallyhistory.com/wp-content/uploads/2012/02/Thomas_Paine.jpg',
        image_address: thomas
    },
    {
        hex_id: 8,
        hex_q: 1,
        hex_r: 3,
        hex_s: -4,
        title: exampleString,
        note: `Nuclear Fusion

        The following is an example passage copied from Wikipedia.

        Nuclear fusion is a reaction in which two or more atomic nuclei are combined to form one or more different atomic nuclei and subatomic particles (neutrons or protons). The difference in mass between the reactants and products is manifested as either the release or the absorption of energy. This difference in mass arises due to the difference in nuclear binding energy between the nuclei before and after the reaction. Nuclear fusion is the process that powers active or main sequence stars and other high-magnitude stars, where large amounts of energy are released.

        A nuclear fusion process that produces atomic nuclei lighter than iron-56 or nickel-62 will generally release energy. These elements have a relatively small mass and a relatively large binding energy per nucleon. Fusion of nuclei lighter than these releases energy (an exothermic process), while the fusion of heavier nuclei results in energy retained by the product nucleons, and the resulting reaction is endothermic. The opposite is true for the reverse process, called nuclear fission. Nuclear fusion uses lighter elements, such as hydrogen and helium, which are in general more fusible; while the heavier elements, such as uranium, thorium and plutonium, are more fissionable. The extreme astrophysical event of a supernova can produce enough energy to fuse nuclei into elements heavier than iron.
`,
        hex_string: '1,3,-4',
        //image_address: 'https://blogs-images.forbes.com/ethansiegel/files/2015/08/SDO-1940x1940.jpg',
        image_address: sun
    },
    {
        hex_id: 9,
        hex_q: 4,
        hex_r: -1,
        hex_s: -3,
        title: '',
        note: '',
        hex_string: '4,-1,-3',
    },
]
const HomePageHexStringList: string[] = [
    '2,1,-3',
    '3,1,-4',
    '4,1,-5',
    '6,-1,-5',
    '5,-1,-4',
    '6,-2,-4',
    '2,3,-5',
    '1,3,-4',
    '4,-1,-3',
]
const HomePagePaths: Partial<PathType>[] = [
    {
        path_id: 1,
        starting_hex_q: 4,
        starting_hex_r: 1,
        starting_hex_s: -5,
        ending_hex_q: 6,
        ending_hex_r: -1,
        ending_hex_s: -5
    },
    {
        path_id: 2,
        starting_hex_q: 4,
        starting_hex_r: 1,
        starting_hex_s: -5,
        ending_hex_q: 1,
        ending_hex_r: 3,
        ending_hex_s: -4
    },
    {
        path_id: 3,
        starting_hex_q: 2,
        starting_hex_r: 1,
        starting_hex_s: -3,
        ending_hex_q: 4,
        ending_hex_r: 1,
        ending_hex_s: -5
    },
]

const HOME_INFO_SECTION_STATE: HomeInfoSectionPropsType[] = [
    {
        header: "There's a lot to learn out there.",
        subheader: "Learning is often an overwhelming process for everyone. A skill tree can help by providing a visualization of the bigger picture.",
        image: skilltree_example,
        width: 1000,
        height: 1000,
    },
    {
        header: "Built with productivity in mind.",
        subheader: "Keyboard shortcuts can be used for almost every action.",
        image: shortcut_example,
        width: 1000,
        height: 1000,
    },
    // You'll want a picture of a CSV file.
    /*{
        header: "Your information is YOURS.",
        subheader: "We do not sell nor share user data.",
        image: skilltree_example,
        width: 1000,
        height: 1000,
    }*/
]

export {
    exampleString,
    welcomeHex,
    HomePageHexes,
    HomePagePaths,
    HomePageHexStringList,
    HOME_INFO_SECTION_STATE,
}

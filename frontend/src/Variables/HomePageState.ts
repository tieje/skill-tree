import { HexagonType, PathType } from "../types/Types"
const exampleString = 'example'
const welcomeHex: Partial<HexagonType> = {
    hex_id: 1,
    hex_q: 2,
    hex_r: 1,
    hex_s: -3,
    title: 'Welcome',
    note: 'Welcome',
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
        note: 'Students',
        hex_string: '3,1,-4',
    },
    {
        hex_id: 3,
        hex_q: 4,
        hex_r: 1,
        hex_s: -5,
        title: 'Teachers',
        note: 'Teachers',
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
        hex_q: 7,
        hex_r: -2,
        hex_s: -5,
        title: 'Github',
        note: '',
        hex_string: '7,-2,-5'
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
        note: 'Thomas Paine info',
        hex_string: '2,3,-5',
        image_address: 'https://totallyhistory.com/wp-content/uploads/2012/02/Thomas_Paine.jpg',
    },
    {
        hex_id: 8,
        hex_q: 1,
        hex_r: 3,
        hex_s: -4,
        title: exampleString,
        note: 'Nuclear Fusion',
        hex_string: '1,3,-4',
        image_address: 'https://blogs-images.forbes.com/ethansiegel/files/2015/08/SDO-1940x1940.jpg',
    },
]
const HomePageHexStringList: string[] = [
    '2,1,-3',
    '3,1,-4',
    '4,1,-5',
    '6,-1,-5',
    '7,-2,-5',
    '6,-2,-4',
    '2,3,-5',
    '1,3,-4'
]
const HomePagePaths: Partial<PathType>[] = [
    /*{
        path_id: 1,
        starting_hex_q: 4,
        starting_hex_r: 1,
        starting_hex_s: -5,
        ending_hex_q: 6,
        ending_hex_r: -1,
        ending_hex_s: -5
    },*/
    {
        path_id: 2,
        starting_hex_q: 4,
        starting_hex_r: 1,
        starting_hex_s: -5,
        ending_hex_q: 1,
        ending_hex_r: 3,
        ending_hex_s: -4
    },
]
export {
    exampleString,
    welcomeHex,
    HomePageHexes,
    HomePagePaths,
    HomePageHexStringList
}

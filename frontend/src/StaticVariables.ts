import { CheckboxType } from "./types/Types"

const VERBAL: string = 'Verbal Feedback'
const QUANTITATIVE: string = 'Quantitative Feedback'
const INVISIBLE: string = 'invisible'
const HEXAGON_FOCUSED: string = 'hexagonFocused'

const verbalBox: CheckboxType = {
    label: VERBAL,
    initial: false,
}
const quantitativeBox: CheckboxType = {
    label: QUANTITATIVE,
    initial: false,
}
const CHECKBOXES = {
    verbal: verbalBox,
    quantitative: quantitativeBox
}

export {
    VERBAL,
    QUANTITATIVE,
    INVISIBLE,
    HEXAGON_FOCUSED,
    CHECKBOXES
}

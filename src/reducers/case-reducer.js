const NOMINATIVE_CHANGE = 'NOMINATIVE_CHANGE';
const GENITIVE_CHANGE = 'GENITIVE_CHANGE';
const DATIVE_CHANGE = 'DATIVE_CHANGE';
const ACCUSATIVE_CHANGE = 'ACCUSATIVE_CHANGE';
const INSTRUMENTAL_CHANGE = 'INSTRUMENTAL_CHANGE';
const PREPOSITIONAL_CHANGE = 'PREPOSITIONAL_CHANGE';
const UPDATE_NEW_WORD = 'UPDATE_NEW_WORD';
const UPDATE_CASE_ID = 'UPDATE_CASE_ID'


let initialState = {
    word: '',
    newWordText: '',
    caseId: '1'
}

const caseReducer = (state = initialState, action) => {
    let toArray = state.newWordText.split('')
    let newState = {...state}
    switch (action.type) {
        case NOMINATIVE_CHANGE:
            newState.word = newState.newWordText
            return newState;

        case GENITIVE_CHANGE:
            if (toArray[toArray.length - 1] == 'а') {
                toArray.splice(toArray.length - 1,1, 'ы')
            }
            else if (toArray[toArray.length - 1] == 'я') {
                toArray.splice(toArray.length - 1,1, 'и')
            }
            else {
                alert('Работаю только с существительными 1-го склонения')
            }
            newState.word = toArray.join('')
            return newState

        case DATIVE_CHANGE:
            if (toArray[toArray.length - 2] + toArray[toArray.length - 1] == 'ия') {
                toArray.splice(toArray.length - 1,1, 'и')
            }
            else if (toArray[toArray.length - 1] == 'а' || toArray[toArray.length - 1] == 'я') {
                toArray.splice(toArray.length - 1,1, 'е')
            }
            else {
                alert('Работаю только с существительными 1-го склонения')
            }
            newState.word = toArray.join('')
            return newState

        case ACCUSATIVE_CHANGE:
            if (toArray[toArray.length - 1] == 'а') {
                toArray.splice(toArray.length - 1,1, 'у')
            }
            else if (toArray[toArray.length - 1] == 'я') {
                toArray.splice(toArray.length - 1,1, 'ю')
            }
            else {
                alert('Работаю только с существительными 1-го склонения')
            }
            newState.word = toArray.join('')
            return newState

        case INSTRUMENTAL_CHANGE:
            if (toArray[toArray.length - 1] == 'а') {
                toArray.splice(toArray.length - 1,1, 'ой')
            }
            else if (toArray[toArray.length - 1] == 'я') {
                toArray.splice(toArray.length - 1,1, 'ей')
            }
            else {
                alert('Работаю только с существительными 1-го склонения')
            }
            newState.word = toArray.join('')
            return newState

        case PREPOSITIONAL_CHANGE:
            if (toArray[toArray.length - 2] + toArray[toArray.length - 1] == 'ия') {
                toArray.splice(toArray.length - 1,1, 'и')
            }
            else if (toArray[toArray.length - 1] == 'а' || toArray[toArray.length - 1] == 'я') {
                toArray.splice(toArray.length - 1,1, 'е')
            }
            else {
                alert('Работаю только с существительными 1-го склонения')
            }
            newState.word = toArray.join('')
            return newState
        case UPDATE_NEW_WORD:
            newState.newWordText = action.text;
            return newState

        case UPDATE_CASE_ID:
            newState.caseId = action.id;
            return newState

        default:
            return state
    }
}

export const nominativeActionCreator = () => ({type: NOMINATIVE_CHANGE})
export const genitiveActionCreator = () => ({type: GENITIVE_CHANGE})
export const dativeActionCreator = () => ({type: DATIVE_CHANGE})
export const accusativeActionCreator = () => ({type: ACCUSATIVE_CHANGE})
export const instrumentalActionCreator = () => ({type: INSTRUMENTAL_CHANGE})
export const prepositionalActionCreator = () => ({type: PREPOSITIONAL_CHANGE})
export const updateNewWordActionCreator = (text) => ({type: UPDATE_NEW_WORD, text})
export const updateCaseIdActionCreator = (id) => ({type: UPDATE_CASE_ID, id})



export default caseReducer;
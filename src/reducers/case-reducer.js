const NOMINATIVE_CHANGE = 'NOMINATIVE_CHANGE';
const GENITIVE_CHANGE = 'GENITIVE_CHANGE';
const DATIVE_CHANGE = 'DATIVE_CHANGE';
const ACCUSATIVE_CHANGE = 'ACCUSATIVE_CHANGE';
const INSTRUMENTAL_CHANGE = 'INSTRUMENTAL_CHANGE';
const PREPOSITIONAL_CHANGE = 'PREPOSITIONAL_CHANGE';
const UPDATE_NEW_WORD = 'UPDATE_NEW_WORD'

let initialState = {
    word: '',
    newWordText: ''
}

const caseReducer = (state = initialState, action) => {
    switch (action.type) {
        case NOMINATIVE_CHANGE:
            return state.newWordText;

        case GENITIVE_CHANGE:
            let toArray = state.newWordText.split('')
            if (toArray[toArray.length - 1] == 'а') {
                toArray.splice(toArray.length - 1,1, 'ы')
            }
            else {
                toArray.splice(toArray.length - 1,1, 'и')
            }
            state.word = toArray.join('')
            return state
        /*case DATIVE_CHANGE:
            return {

            };
        case ACCUSATIVE_CHANGE:
            return {

            };
        case INSTRUMENTAL_CHANGE:
            return {

            };
        case PREPOSITIONAL_CHANGE:
            return {

            };*/
        case UPDATE_NEW_WORD:
            state.newWordText = action.text;
            return state

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


export default caseReducer;
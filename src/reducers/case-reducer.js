const NOMINATIVE_CHANGE = 'NOMINATIVE_CHANGE';
const GENITIVE_CHANGE = 'GENITIVE_CHANGE';
const DATIVE_CHANGE = 'DATIVE_CHANGE';
const ACCUSATIVE_CHANGE = 'ACCUSATIVE_CHANGE';
const INSTRUMENTAL_CHANGE = 'INSTRUMENTAL_CHANGE';
const PREPOSITIONAL_CHANGE = 'PREPOSITIONAL_CHANGE';
const UPDATE_NEW_WORD = 'UPDATE_NEW_WORD'

let initialState = {
    word: [],
    newWordText: 'ыыы'
}

const caseReducer = (state = initialState, action) => {
    debugger;
    switch (action.type) {
        case NOMINATIVE_CHANGE:
            return state;

        case GENITIVE_CHANGE:
            let toArray = state.split('')
            if (toArray[toArray.length - 1] === 'a') {
                toArray.splice(toArray.length - 1,1, 'ы')
                state = toArray.join('')
            }
            else {
                toArray.splice(toArray.length - 1,1, 'и')
                state = toArray.join('')
            }
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
            return state;
        default:
            return state
    }
}

export const nominativeActionCreator = (text) => ({type: NOMINATIVE_CHANGE, text})
export const genitiveActionCreator = (text) => ({type: GENITIVE_CHANGE, text})
export const dativeActionCreator = (text) => ({type: DATIVE_CHANGE, text})
export const accusativeActionCreator = (text) => ({type: ACCUSATIVE_CHANGE, text})
export const instrumentalActionCreator = (text) => ({type: INSTRUMENTAL_CHANGE, text})
export const prepositionalActionCreator = (text) => ({type: PREPOSITIONAL_CHANGE, text})
export const updateNewWordActionCreator = (text) => ({type: UPDATE_NEW_WORD, text})


export default caseReducer;
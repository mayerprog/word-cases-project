import React from 'react'
import SearchArea from "./SearchArea";
import connect from "react-redux/lib/connect/connect";
import {
    accusativeActionCreator,
    dativeActionCreator,
    genitiveActionCreator, instrumentalActionCreator,
    nominativeActionCreator, prepositionalActionCreator, updateNewWordActionCreator
} from "../../reducers/case-reducer";


const mapStateToProps = (state) => {
    return {
        caseChange: state.caseChange
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        nominativeChange: (text) => dispatch(nominativeActionCreator(text)),
        genitiveChange: (text) => dispatch(genitiveActionCreator(text)),
        dativeChange: (text) => dispatch(dativeActionCreator(text)),
        accusativeChange: (text) => dispatch(accusativeActionCreator(text)),
        instrumentalChange: (text) => dispatch(instrumentalActionCreator(text)),
        prepositionalChange: (text) => dispatch(prepositionalActionCreator(text)),
        updateNewWord: (text) => dispatch(updateNewWordActionCreator(text))
    }
}

const SearchAreaContainer = connect(mapStateToProps, mapDispatchToProps)(SearchArea)

export default SearchAreaContainer;
import React from 'react'
import SearchArea from "./SearchArea";
import connect from "react-redux/lib/connect/connect";
import {
    accusativeActionCreator,
    dativeActionCreator,
    genitiveActionCreator, instrumentalActionCreator,
    nominativeActionCreator, prepositionalActionCreator, updateCaseIdActionCreator, updateNewWordActionCreator
} from "../../reducers/case-reducer";


const mapStateToProps = (state) => {
    return {
        caseChange: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        nominativeChange: () => dispatch(nominativeActionCreator()),
        genitiveChange: () => dispatch(genitiveActionCreator()),
        dativeChange: () => dispatch(dativeActionCreator()),
        accusativeChange: () => dispatch(accusativeActionCreator()),
        instrumentalChange: () => dispatch(instrumentalActionCreator()),
        prepositionalChange: () => dispatch(prepositionalActionCreator()),
        updateNewWord: (text) => dispatch(updateNewWordActionCreator(text)),
        updateCaseId: (id) => dispatch(updateCaseIdActionCreator(id))
    }
}

const SearchAreaContainer = connect(mapStateToProps, mapDispatchToProps)(SearchArea)

export default SearchAreaContainer;
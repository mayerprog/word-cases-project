import React from "react";
import s from "./SearchArea.module.css";

const SearchArea = (props) => {
    let onButtonClick = () => {
        switch (props.caseChange.caseChange.caseId) {
            case '1':
                props.nominativeChange();
                break
            case '2':
                props.genitiveChange();
                break
            case '3':
                props.dativeChange();
                break
            case '4':
                props.accusativeChange();
                break
            case '5':
                props.instrumentalChange();
                break
            case '6':
                props.prepositionalChange();
                break
        }
    }

    let textOnchange = (e) => {
        let text = e.target.value
        props.updateNewWord(text)
    }
    let selectOnChange = (e) => {
        props.updateCaseId(e.target.value)
    }
    return (
        <div className={s.position}>
            <div>
                <textarea value={props.caseChange.caseChange.newWordText} placeholder={"Enter your message"}
                          onChange={textOnchange}/>
            </div>
            <div>
                <button onClick={onButtonClick}>Поиск</button>
            </div>
            <div>
                <select name="cases" value={props.caseChange.caseChange.caseId} onChange={selectOnChange}>
                    <option value="1">Именительный</option>
                    <option value="2">Родительный</option>
                    <option value="3">Дательный</option>
                    <option value="4">Винительный</option>
                    <option value="5">Творительный</option>
                    <option value="6">Предложный</option>
                </select>
                <div className={s.p}>{props.caseChange.caseChange.word}</div>
            </div>

        </div>

    );
};


export default SearchArea;

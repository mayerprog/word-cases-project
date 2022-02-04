import React from "react";
import s from "./SearchArea.module.css";

const SearchArea = (props) => {
    let textOnchange = (e) => {
        let text = e.target.value
        props.updateNewWord(text)
    }
    return (
        <div className={s.position}>
            <div>
                <textarea value={props.caseChange.newWordText} placeholder={"Enter your message"} onChange={textOnchange}/>
            </div>
            <div>
                <button onClick={props.genitiveChange}>Send</button>
            </div>
            <select name="cases">
                <option value="1">Именительный</option>
                <option value="2">Родительный</option>
                <option value="3">Дательный</option>
                <option value="4">Винительный</option>
                <option value="5">Творительный</option>
                <option value="6">Предложный</option>
            </select>

            <div>{props.word}</div>
        </div>
    );
};


export default SearchArea;

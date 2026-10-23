import "./mcq-layout.css";
import {ReviewIcon, AnswerEliminatorIcon} from "./icons.tsx";
import {getQuestionData} from "./data.tsx";
import { useState } from "react";

// let data = getQuestionData()[0];
const numquestions = getQuestionData().length;

export default function MCQ_Layout() {
    const [question, setQuestion] = useState(0);
    let data = getQuestionData()[question];

    return (
        <>
        <header>
            <h2 className="section-count">Section I</h2>
            <h2 className="directions">Directions</h2>
            <h2 className="timer">0:00</h2>
            <button className="hide-button">Hide</button>
            <button className="more-button"></button>
            <h2 className="more-label">More</h2>
        </header>
        <main>
            <div className="questions">
                <div className="toolbar">
                    <p>{data["number"]}</p>
                    <ReviewIcon />
                    <p>Mark for Review</p>
                    <AnswerEliminatorIcon />
                </div>
                <div className="toolbar-border"></div>
                    <p className="question">{data["question"]}</p>
                <div className="answer-choices">
                    <button className="answer"><span className="answer-bubble">A</span>{data["options"][0]}</button><span className="answer-eliminator">A</span>
                    <button className="answer"><span className="answer-bubble">B</span>{data["options"][1]}</button><span className="answer-eliminator">B</span>
                    <button className="answer"><span className="answer-bubble">C</span>{data["options"][2]}</button><span className="answer-eliminator">C</span>
                    <button className="answer"><span className="answer-bubble">D</span>{data["options"][3]}</button><span className="answer-eliminator">D</span>
                    <button className="answer"><span className="answer-bubble">E</span>{data["options"][4]}</button><span className="answer-eliminator">E</span>
                </div>
            </div>
        </main>
        <footer>
            <h2 className="name">Jane Doe</h2>
            <h2 className="totals">Question 6 of 13</h2>
            {data["number"] != 1 && (
                <button className="nav-question" onClick={() => setQuestion(question - 1)}>Back</button>
            )} 
            {data["number"] != numquestions && (
                <button className="nav-question" onClick={() => setQuestion(question + 1)}>Next</button>
            )} 
        </footer>
        </>
    );
}
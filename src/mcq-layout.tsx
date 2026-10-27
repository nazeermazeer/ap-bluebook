import "./mcq-layout.css";
import {ReviewIconUnselected, ReviewIconSelected, AnswerEliminatorIconSelected, AnswerEliminatorIconUnselected} from "./icons.tsx";
import {getQuestionData} from "./data.tsx";
import { useState } from "react";

const numquestions = getQuestionData().length;

export default function MCQ_Layout() {
    const [question, setQuestion] = useState(0);
    let data = getQuestionData()[question];

    const [timerHidden, setTimerHidden] = useState(false);
    const [markForReview, setMarkForReview] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(-1);
    const [answerEliminator, setAnswerEliminator] = useState(true);
    const [answersEliminated, setAnswersEliminated] = useState({ a: false, b: false, c: false, d: false, e: false});

    return (
        <>
        <header>
            <h2 className="section-count">Section I</h2>
            <h2 className="directions">Directions</h2>
            <h2 className="timer">{timerHidden ? '-:--' : '0:00'}</h2>
            <button className="hide-button" onClick={() => setTimerHidden(prev => !prev)}>{timerHidden ? 'Show' : 'Hide'}</button>
            <button className="more-button"></button>
            <h2 className="more-label">More</h2>
        </header>

        <main>
            <div className="questions">
                <div className="toolbar">
                    <p>{data["number"]}</p>
                    <button className="review-icon" onClick={() => {setMarkForReview(prev => !prev)}}>
                        {markForReview ? <ReviewIconSelected /> : <ReviewIconUnselected />}
                    </button>
                    <p>Mark for Review</p>
                    <button className="answer-eliminator-icon" onClick={() => {setAnswerEliminator(prev => !prev)}}>
                        {answerEliminator ? <AnswerEliminatorIconSelected /> : <AnswerEliminatorIconUnselected /> }
                    </button>
                </div>
                <div className="toolbar-border"></div>
                <p className="question">{data["question"]}</p>

                <div className={answerEliminator ? "answer-choices-with-eliminators" : "answer-choices-without-eliminators"}>
                    <button className={answersEliminated.a == true ? ("answer-eliminated") : selectedAnswer == 0 ? ("answer-selected") : "answer"} onClick={() => {if (answersEliminated.a == false) { setSelectedAnswer(0)}}}>
                        <span className={selectedAnswer == 0 ? "answer-bubble-selected" : "answer-bubble-deselected"}>A</span>{data["options"][0]}
                    </button>{answerEliminator && 
                        <button className={answersEliminated.a == true ? "answer-eliminator-undo" : "answer-eliminator"} 
                        onClick={() => setAnswersEliminated(prev => ({...prev, a: !prev.a}))}>{answersEliminated.a == true ? "Undo" : "A"}
                    </button>}
                    
                    <button className={answersEliminated.b == true ? ("answer-eliminated") : selectedAnswer == 1 ? ("answer-selected") : "answer"} onClick={() => {if (answersEliminated.b == false) { setSelectedAnswer(1)}}}>
                        <span className={selectedAnswer == 1 ? "answer-bubble-selected" : "answer-bubble-deselected"}>B</span>{data["options"][1]}
                    </button>{answerEliminator && 
                        <button className={answersEliminated.b == true ? "answer-eliminator-undo" : "answer-eliminator"} 
                        onClick={() => setAnswersEliminated(prev => ({...prev, b: !prev.b}))}>{answersEliminated.b == true ? "Undo" : "B"}
                    </button>}

                    <button className={answersEliminated.c == true ? ("answer-eliminated") : selectedAnswer == 2 ? ("answer-selected") : "answer"} onClick={() => {if (answersEliminated.c == false) { setSelectedAnswer(2)}}}>
                        <span className={selectedAnswer == 2 ? "answer-bubble-selected" : "answer-bubble-deselected"}>C</span>{data["options"][2]}
                    </button>{answerEliminator && 
                        <button className={answersEliminated.c == true ? "answer-eliminator-undo" : "answer-eliminator"} 
                        onClick={() => setAnswersEliminated(prev => ({...prev, c: !prev.c}))}>{answersEliminated.c == true ? "Undo" : "C"}
                    </button>}

                    <button className={answersEliminated.d == true ? ("answer-eliminated") : selectedAnswer == 3 ? ("answer-selected") : "answer"} onClick={() => {if (answersEliminated.d == false) { setSelectedAnswer(3)}}}>
                        <span className={selectedAnswer == 3 ? "answer-bubble-selected" : "answer-bubble-deselected"}>D</span>{data["options"][3]}
                    </button>{answerEliminator && 
                        <button className={answersEliminated.d == true ? "answer-eliminator-undo" : "answer-eliminator"} 
                        onClick={() => setAnswersEliminated(prev => ({...prev, d: !prev.d}))}>{answersEliminated.d == true ? "Undo" : "D"}
                    </button>}


                    <button className={answersEliminated.e == true ? ("answer-eliminated") : selectedAnswer == 4 ? ("answer-selected") : "answer"} onClick={() => {if (answersEliminated.e == false) { setSelectedAnswer(4)}}}>
                        <span className={selectedAnswer == 4 ? "answer-bubble-selected" : "answer-bubble-deselected"}>E</span>{data["options"][4]}
                    </button>{answerEliminator && 
                        <button className={answersEliminated.e == true ? "answer-eliminator-undo" : "answer-eliminator"} 
                        onClick={() => setAnswersEliminated(prev => ({...prev, e: !prev.e}))}>{answersEliminated.e == true ? "Undo" : "E"}
                    </button>}
                </div>
            </div>
        </main>
        <footer>
            <h2 className="name">Jane Doe</h2>
            <h2 className="totals">Question {question + 1} of {numquestions}</h2>
            {data["number"] != 1 ? (
                <button className="nav-question" onClick={() => setQuestion(question - 1)}>Back</button>
            ) : (
                <button className="nav-question" style={{visibility : 'hidden' }}>Back</button>        
            )} 
            {data["number"] != numquestions && (
                <button className="nav-question" onClick={() => setQuestion(question + 1)}>Next</button>
            )} 
        </footer>
        </>
    );
}
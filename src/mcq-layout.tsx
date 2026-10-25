import "./mcq-layout.css";
import {ReviewIconUnselected, ReviewIconSelected, AnswerEliminatorIconSelected, AnswerEliminatorIconUnselected} from "./icons.tsx";
import {getQuestionData} from "./data.tsx";
import { useState } from "react";

const numquestions = getQuestionData().length;

export default function MCQ_Layout() {
    const [question, setQuestion] = useState(0);
    let data = getQuestionData()[question];

    const [timerHidden, setTimerHidden] = useState(false);

    const [answerEliminator, setAnswerEliminator] = useState(true);

    const [answersEliminated, setAnswersEliminated] = useState({ a: false, b: false, c: false, d: false, e: false});

    const [markForReview, setMarkForReview] = useState(false);

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
                    <button className={answersEliminated.a == true ? "answer-eliminated" : "answer"}>
                        <span className="answer-bubble">A</span>{data["options"][0]}
                    </button>{answerEliminator && <button className="answer-eliminator" onClick={() => setAnswersEliminated({a: true, b: false, c: false, d: false, e: false})}>A</button>}
                    <button className={answersEliminated.b == true ? "answer-eliminated" : "answer"}>
                        <span className="answer-bubble">B</span>{data["options"][1]}
                    </button>{answerEliminator && <button className="answer-eliminator" onClick={() => setAnswersEliminated({a: false, b: true, c: false, d: false, e: false})}>B</button>}
                    <button className={answersEliminated.c == true ? "answer-eliminated" : "answer"}>
                        <span className="answer-bubble">C</span>{data["options"][2]}
                    </button>{answerEliminator && <button className="answer-eliminator" onClick={() => setAnswersEliminated({a: false, b: false, c: true, d: false, e: false})}>C</button>}
                    <button className={answersEliminated.d == true ? "answer-eliminated" : "answer"}>
                        <span className="answer-bubble">D</span>{data["options"][3]}
                    </button>{answerEliminator && <button className="answer-eliminator" onClick={() => setAnswersEliminated({a: false, b: false, c: false, d: true, e: false})}>D</button>}
                    <button className={answersEliminated.e == true ? "answer-eliminated" : "answer"}>
                        <span className="answer-bubble">E</span>{data["options"][4]}
                    </button>{answerEliminator && <button className="answer-eliminator" onClick={() => setAnswersEliminated({a: false, b: false, c: false, d: false, e: true})}>E</button>}
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
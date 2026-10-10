import "./mcq-layout.css";
import {ReviewIcon, AnswerEliminatorIcon} from "./icons.tsx";

function App() {
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
                <p>6</p>
                <ReviewIcon />
                <p>Mark for Review</p>
                <AnswerEliminatorIcon />
            </div>
            <div className="toolbar-border"></div>
                <p className="question">Hierarchical diffusion is defined as the movement of a culture trait</p>
            <div className="answer-choices">
                <button className="answer"><span className="answer-bubble">A</span>across a geographic barrier such as an ocean or desert</button><span className="answer-eliminator">A</span>
                <button className="answer"><span className="answer-bubble">B</span>from a hearth or place of origin outward in all directions</button><span className="answer-eliminator">B</span>
                <button className="answer"><span className="answer-bubble">C</span>from more influential places to less influential places</button><span className="answer-eliminator">C</span>
                <button className="answer"><span className="answer-bubble">D</span>between places that are in close proximity to a line of transport</button><span className="answer-eliminator">D</span>
                <button className="answer"><span className="answer-bubble">E</span>that affects all places simultaneously regardless of their location</button><span className="answer-eliminator">E</span>
            </div>
        </div>
    </main>
    <footer>
        <h2 className="name">Jane Doe</h2>
        <h2 className="totals">Question 6 of 13</h2>
        <button className="nav-question">Back</button>
        <button className="nav-question">Next</button>
    </footer>
    </>
  );
}

export default App;

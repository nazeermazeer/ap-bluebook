import "./App.css";

function App() {
  return (
    <>
    <header>
        <h2 className="timer">0:00</h2>
        <button className="hidebutton">Hide</button>
    </header>
    <main>
        <div className="questions">
            <p className="question">Hierarchical diffusion is defined as the movement of a culture trait</p>
            <button className="answer">across a geographic barrier such as an ocean or desert</button>
            <button className="answer">from a hearth or place of origin outward in all directions</button>
            <button className="answer">from more influential places to less influential places</button>
            <button className="answer">between places that are in close proximity to a line of transport</button>
            <button className="answer">that affects all places simultaneously regardless of their location</button>
        </div>
    </main>
    </>
  );
}

export default App;

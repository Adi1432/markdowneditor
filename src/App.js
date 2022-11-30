import "./App.css";
import MdContainer from "./components/EditorCon/MdContainer";

function App() {
  return (
    <>
      <span className="details">
        <h3>MarkDown Editor</h3>
        <a
          href="https://www.markdownguide.org/cheat-sheet
"
        >
          CheetSheet
        </a>
      </span>

      <MdContainer />
    </>
  );
}

export default App;

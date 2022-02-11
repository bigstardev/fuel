import { useState } from "react"
import Navbar from '../navbar/Navbar'
import QuestionList from "../questionlist/QuestionList";
import "./App.css"

function App() {
  const [title, setTitle] = useState("New Questionaire")
  return (
    <div className="App">

      <Navbar title={title} />
      <QuestionList changeTitle={setTitle} />


    </div>
  );
}

export default App;

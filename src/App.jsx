import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/homepage'
import ProblemOne from './components/problemOne'
import './App.css'
import ProblemTwo from './components/problemTwo'
import ProblemThree from './components/problemThree'
import ProblemFour from './components/problemFour'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/problem-one" element={<ProblemOne/>}></Route>
          <Route path="/problem-two" element={<ProblemTwo/>}></Route>
          <Route path="/problem-three" element={<ProblemThree/>}></Route>
          <Route path="/problem-four" element={<ProblemFour/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

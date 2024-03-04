import './App.css';
import { useState } from 'react'
import MoleContainer from './components/MoleContainer';
import './whackamole.css'

function App() {

  let [score, setScore] = useState(0)

  const createMoleHill = () => {
    let hills = []
    for (let i = 0; i < 9; i++) {
      hills.push(<MoleContainer key={i} setScore={setScore} score={score} />)
    }

    return (
      <div>
        { hills }
      </div>
    )
  }



  return (
    <div className="gameBoard">
      <h1>React-A-Mole!</h1>
      <div className='scoreContainer'>
        <div className='scoreDisplay'>
          <span className='scoreLabel'>Score</span>
          <span className='scoreValue'>{score}</span>
        </div>
      </div>
      {createMoleHill()}
    </div>
  );
}

export default App;

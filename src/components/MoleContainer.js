import { useState, useEffect } from 'react'
import Mole from './Mole'
import EmptyHill from './EmptyMoleSlot'

const MoleContainer = (props) => {
    let [ leMole, setLeMole] = useState(false)

    const handleClick = (e) => {
        props.setScore(props.score + 1)
        setLeMole(false)
    }

    let displayMole = leMole ? <Mole setScore={props.setScore} toggle={setLeMole} handleClick={handleClick} /> : <EmptyHill toggle={setLeMole} />

    return (
        <div style={{'display': 'inline-block', 'width': '30vw'}}>
            {displayMole}
        </div>
    )
}

export default MoleContainer

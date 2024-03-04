import { useEffect } from 'react'
import moleImg from '../Assets/mole.png'

const Mole = (props) => {

    useEffect(() => {
        let randomSec = Math.ceil(Math.random() * 10000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randomSec)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}} src={moleImg} onClick={props.handleClick} />
        </div>
    )
}

export default Mole
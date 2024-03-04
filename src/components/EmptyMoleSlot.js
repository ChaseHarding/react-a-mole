import { useEffect } from 'react'
import MoleHill from '../Assets/molehill.png'

const EmptyHill = (props) => {
    
    useEffect(() => {
        let randomSec =Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randomSec)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}} src={MoleHill} />
        </div>
    )
}

export default EmptyHill
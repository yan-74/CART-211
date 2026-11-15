import './Finish.css'
import { Link } from 'react-router-dom'

function Finish() {
    return(
        <div className="finish-page">
            <h1>You finished the game!</h1>
            <p>Congratulations! You have completed the game.</p>
            <Link to="/">Play Again</Link>
        </div>
    )
}

export default Finish;
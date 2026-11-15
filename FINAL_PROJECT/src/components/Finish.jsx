import './Finish.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { GameContext } from './gameContext.js'

function Finish() {
    const game = useContext(GameContext)
    const stats = game.stats

    return(
        <div className="finish-page">
            <h1>You finished the game!</h1>
            <p>Congratulations! You have completed the game.</p>
            <p>Final Stats:</p>

            <div className="finish-stats">
                <div className="finish-stat">
                    <label htmlFor="revenue">Revenue</label>
                    <progress id="revenue" value={stats.revenue} min="0" max="100" />
                    <span>{stats.revenue}%</span>
                </div>
                <div className="finish-stat">
                    <label htmlFor="investor-trust">Investor Trust</label>
                    <progress id="investor-trust" value={stats.investorTrust} min="0" max="100" />
                    <span>{stats.investorTrust}%</span>
                </div>
                <div className="finish-stat">
                    <label htmlFor="user-satisfaction">User Satisfaction</label>
                    <progress id="user-satisfaction" value={stats.userSatisfaction} min="0" max="100" />
                    <span>{stats.userSatisfaction}%</span>
                </div>
                <div className="finish-stat">
                    <label htmlFor="user-traffic">User Traffic</label>
                    <progress id="user-traffic" value={stats.userTraffic} min="0" max="100" />
                    <span>{stats.userTraffic}%</span>
                </div>
            </div>
            <Link to="/" onClick={() => game.resetGame()}>Play Again</Link>
        </div>
    )
}

export default Finish;
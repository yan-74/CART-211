import './Scenario.css'
import { Link, Navigate, useParams } from 'react-router-dom'
import { useContext } from 'react'
import { GameContext } from './gameContext.js'

const scenarios = [
    {
        title: 'Scenario 1',
        text: 'Text describing scenario 1',
    },
    {
        title: 'Scenario 2',
        text: 'Text describing scenario 2',
    },
    {
        title: 'Scenario 3',
        text: 'Text describing scenario 3',
    },
    {
        title: 'Scenario 4',
        text: 'Text describing scenario 4',
    },
    {
        title: 'Scenario 5',
        text: 'Text describing scenario 5',
    },
    {
        title: 'Scenario 6',
        text: 'Text describing scenario 6',
    },
    {
        title: 'Scenario 7',
        text: 'Text describing scenario 7',
    },
    {
        title: 'Scenario 8',
        text: 'Text describing scenario 8',
    },
]

function Scenario() {
    const { scenarioId } = useParams()
    const game = useContext(GameContext)
    const stats = game.stats
    const scenario = scenarios[Number(scenarioId) - 1]
    const nextScenarioId = Number(scenarioId) + 1
    /* if next scenario exists, use the id, otherwise go to finish page */
    const nextDestination = nextScenarioId <= scenarios.length
        ? `/scenario/${nextScenarioId}`
        : '/finish'

    /* If the scenario doesn't exist, redirect to the first scenario */
    if (!scenario) {
        return <Navigate to="/scenario/1" replace />
    }

    return(
        <div className="scenario-page">
            <nav className="sidebar" aria-label="Scenario navigation">
                <Link to="/scenario/1">1</Link>
                <Link to="/scenario/2">2</Link>
                <Link to="/scenario/3">3</Link>
                <Link to="/scenario/4">4</Link>
                <Link to="/scenario/5">5</Link>
                <Link to="/scenario/6">6</Link>
                <Link to="/scenario/7">7</Link>
                <Link to="/scenario/8">8</Link>
            </nav>

            <div className="stats">
                <div className="stat">
                    <label htmlFor="revenue">Revenue</label>
                    <progress id="revenue" value={stats.revenue} min="0" max="100" />
                    <span>{stats.revenue}%</span>
                </div>
                <div className="stat">
                    <label htmlFor="investor-trust">Investor Trust</label>
                    <progress id="investor-trust" value={stats.investorTrust} min="0" max="100" />
                    <span>{stats.investorTrust}%</span>
                </div>
                <div className="stat">
                    <label htmlFor="user-satisfaction">User Satisfaction</label>
                    <progress id="user-satisfaction" value={stats.userSatisfaction} min="0" max="100" />
                    <span>{stats.userSatisfaction}%</span>
                </div>
                <div className="stat">
                    <label htmlFor="user-traffic">User Traffic</label>
                    <progress id="user-traffic" value={stats.userTraffic} min="0" max="100" />
                    <span>{stats.userTraffic}%</span>
                </div>
            </div>

            <h1>{scenario.title}</h1>

            <p>{scenario.text}</p>
            <div className="answers">
                <Link to={nextDestination} onClick={() => {game.updateStats({revenue: stats.revenue + 10, userTraffic: stats.userTraffic + 10, userSatisfaction: stats.userSatisfaction - 5})}}>Add Google Search Ads: Revenue +10, userTraffic +10, userSatisfaction -5</Link>

                <Link to={nextDestination} onClick={() => {game.updateStats({revenue: stats.revenue - 20, userSatisfaction: stats.userSatisfaction + 25, investorTrust: stats.investorTrust - 20})}}>Invest In Platform Features: Revenue -20, userSatisfaction +25, investorTrust -20</Link>

                <Link to={nextDestination} onClick={() => {game.updateStats({revenue: stats.revenue + 30, userSatisfaction: stats.userSatisfaction - 20, investorTrust: stats.investorTrust + 20})}}>Focus On Ad Targeting Infrastructure: Revenue +30, userSatisfaction -20, investorTrust +20</Link>

                <Link to={nextDestination} onClick={() => {game.updateStats({revenue: stats.revenue - 10, userSatisfaction: stats.userSatisfaction - 10, investorTrust: stats.investorTrust - 10})}}>Take A Break: Revenue -10, userSatisfaction -10, investorTrust -10</Link>
            </div>
        </div>
    )
}

export default Scenario;
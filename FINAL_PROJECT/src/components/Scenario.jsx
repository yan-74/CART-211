import './Scenario.css'
import { Link, Navigate, useParams } from 'react-router-dom'
import { useContext } from 'react'
import { GameContext } from './gameContext.js'
import Dashboard from './Dashboard.jsx'

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

            <Dashboard stats={stats} />

            <h1>{scenario.title}</h1>

            <p>{scenario.text}</p>
            <div className="answers">
                <Link to={nextDestination} onClick={() => {game.updateStats({revenue: stats.revenue + 10, userTraffic: stats.userTraffic + 10, userSatisfaction: stats.userSatisfaction - 5})}}><span>Add Google Search Ads: <hr/>Revenue <span className="positive">+10</span>, User Traffic <span className="positive">+10</span>, User Satisfaction <span className="negative">-5</span></span></Link>

                <Link to={nextDestination} onClick={() => {game.updateStats({revenue: stats.revenue - 20, userSatisfaction: stats.userSatisfaction + 25, investorTrust: stats.investorTrust - 20})}}><span>Invest In Platform Features: <hr/>Revenue <span className="negative">-20</span>, User Satisfaction <span className="positive">+25</span>, InvestorTrust <span className="negative">-20</span></span></Link>

                <Link to={nextDestination} onClick={() => {game.updateStats({revenue: stats.revenue + 30, userSatisfaction: stats.userSatisfaction - 20, investorTrust: stats.investorTrust + 20})}}><span>Focus On Ad Targeting Infrastructure: <hr/>Revenue <span className="positive">+30</span>, User Satisfaction <span className="negative">-20</span>, Investor Trust <span className="positive">+20</span></span></Link>

                <Link to={nextDestination} onClick={() => {game.updateStats({revenue: stats.revenue - 10, userSatisfaction: stats.userSatisfaction - 10, investorTrust: stats.investorTrust - 10})}}><span>Take A Break: <hr/>Revenue <span className="negative">-10</span>, User Satisfaction <span className="negative">-10</span>, Investor Trust <span className="negative">-10</span></span></Link>
            </div>
        </div>
    )
}

export default Scenario;
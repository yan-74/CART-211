import './Scenario.css'
import { Link, Navigate, useParams } from 'react-router-dom'

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
    const scenario = scenarios[Number(scenarioId) - 1]
    const nextScenarioId = Number(scenarioId) + 1

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

            <h1>{scenario.title}</h1>

            <p>{scenario.text}</p>
            {nextScenarioId <= scenarios.length ? (
                <Link to={`/scenario/${nextScenarioId}`}>Next Scenario</Link>
            ) : (
                <Link to="/finish">Finish Game</Link>
            )}
        </div>
    )
}

export default Scenario;
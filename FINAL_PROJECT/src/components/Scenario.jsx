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
        <div>
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
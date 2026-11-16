import './Start.css'
import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import Scenario from './Scenario.jsx'
import Finish from './Finish.jsx'
import { GameProvider } from './GameContext.jsx'

function StartScreen() {
    return(
        <div className="start-page">
            <h1>Welcome to the DIGITAL PLATFORM GAME</h1>
            <p>This is the start page.</p>
            <Link to="/scenario/1">Start Game</Link>
        </div>
    )
}

function Start() {
    return(
        <HashRouter>
            <GameProvider>
                <Routes>
                    <Route path="/" element={<StartScreen />} />
                    <Route path="/scenario/:scenarioId" element={<Scenario />} />
                    <Route path="/finish" element={<Finish />} />
                </Routes>
            </GameProvider>
        </HashRouter>
    )
}

export default Start;
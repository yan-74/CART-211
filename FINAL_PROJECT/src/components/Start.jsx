import './Start.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Scenario from './Scenario.jsx'
import Finish from './Finish.jsx'

function StartScreen() {
    return(
        <div>
            <h1>Welcome to the DIGITAL PLATFORM GAME</h1>
            <p>This is the start page.</p>
            <Link to="/scenario/1">Start Game</Link>
        </div>
    )
}

function Start() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<StartScreen />} />
                <Route path="/scenario/:scenarioId" element={<Scenario />} />
                <Route path="/finish" element={<Finish />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Start;
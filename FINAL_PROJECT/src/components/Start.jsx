import './Start.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Scenario from './Scenario.jsx'
import Finish from './Finish.jsx'
import { GameProvider } from './GameContext.jsx'

function StartScreen() {
    return(
        <div className="start-page">
            <h1>The Board Meeting</h1>
            <p>Welcome! You have just been appointed as CEO of the digital platform Twooter, and your goal is to make it as successful as possible. <br></br>But important decisions lie ahead--will you strive for perfection, or satisfy your sponsor overlords?</p>
            <Link to="/scenario/1">Enter the Meeting Room</Link>
        </div>
    )
}

function Start() {
    return(
        <BrowserRouter basename="/CART-211/final_project">
            <GameProvider>
                <Routes>
                    <Route path="/" element={<StartScreen />} />
                    <Route path="/scenario/:scenarioId" element={<Scenario />} />
                    <Route path="/finish" element={<Finish />} />
                </Routes>
            </GameProvider>
        </BrowserRouter>
    )
}

export default Start;
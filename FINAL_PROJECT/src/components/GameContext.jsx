/* All React Context code inspired from this tutorial: https://react.dev/learn/passing-data-deeply-with-context*/

import { useState } from 'react'
import { GameContext } from './gameContext.js'

const initialStats = {
    revenue: 50,
    investorTrust: 50,
    userSatisfaction: 0,
    userTraffic: 0,
}

export function GameProvider({ children }) {
    const [stats, setStats] = useState(initialStats)

    function updateStats(changes) {
        setStats((currentStats) => {
            const clampedChanges = Object.fromEntries(
                Object.entries(changes).map(([stat, value]) => [
                    stat,
                    Math.min(100, Math.max(0, value)),
                ]),
            )

            return {
                ...currentStats,
                ...clampedChanges,
            }
        })
    }

    function resetGame() {
        setStats(initialStats)
    }

    return (
        /* Makes the game state available to all components in the tree */
        <GameContext.Provider value={{ stats, updateStats, resetGame }}>
            {children}
        </GameContext.Provider>
    )
}
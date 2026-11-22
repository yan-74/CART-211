/* All React Context code inspired from this tutorial: https://react.dev/learn/passing-data-deeply-with-context*/

import { useState } from 'react'
import { GameContext } from './gameContext.js'

const initialStats = {
    revenue: 50,
    investorTrust: 50,
    userSatisfaction: 50,
    userTraffic: 50,
}

export function GameProvider({ children }) {
    /* gameState contains CURRENT stats & initial history */
    const [gameState, setGameState] = useState({
        stats: initialStats,
        statsHistory: [{ scenario: 1, ...initialStats }],
    })

    function updateStats(changes) {
        setGameState((currentState) => {
            const clampedChanges = Object.fromEntries(
                Object.entries(changes).map(([stat, value]) => [
                    stat,
                    Math.min(100, Math.max(0, value)),
                ]),
            )
            /* merge the current stats with the clamped changes to create the next stats */
            const nextStats = {
                ...currentState.stats,
                ...clampedChanges,
            }
            /* return the new game state with updated stats and updated history */
            return {
                stats: nextStats,
                statsHistory: [
                    ...currentState.statsHistory,
                    {
                        scenario: currentState.statsHistory.length + 1,
                        ...nextStats,
                    },
                ],
            }
        })
    }

    function resetGame() {
        setGameState({
            stats: initialStats,
            statsHistory: [{ scenario: 1, ...initialStats }],
        })
    }

    return (
        /* Makes the game state available to all components in the tree */
        <GameContext.Provider value={{ ...gameState, updateStats, resetGame }}>
            {children}
        </GameContext.Provider>
    )
}
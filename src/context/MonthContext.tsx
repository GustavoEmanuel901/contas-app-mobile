import React, { createContext, useState } from 'react'

interface MonthContextData {
    currentMonth: string
    newMonth(monthValue: string): void
    clearMonth(): void
}

const MonthContext = createContext<MonthContextData>({} as MonthContextData)

export const MonthProvider: React.FC = ({ children }) => {
    const [month, setMonth] = useState('')

    function newMonth(monthValue: string) {
        setMonth(monthValue)
    }

    function clearMonth() {
        setMonth('')
    }

    return (
        <MonthContext.Provider value={{currentMonth: month, newMonth, clearMonth }}>
            {children}
        </MonthContext.Provider>
    )
}

export default MonthContext
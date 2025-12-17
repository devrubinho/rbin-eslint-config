import React from 'react'
import { useState } from 'react'
import './App.css'
import { z } from 'zod'

const TestProblems = () => {
  const [count, setCount] = useState(0)
  const unusedVar = 'test'

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div className="p-4 bg-blue-500 text-white rounded-lg flex items-center">
      <button onClick={handleClick} className="px-4 py-2 bg-red-500 rounded">
        Count: {count}
      </button>
    </div>
  )
}

export default TestProblems

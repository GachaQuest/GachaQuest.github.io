import React, { useState } from 'react'

const CounterButton: React.FunctionComponent = ({ }) => {
    const [counter, setCounter] = useState(0)

    const handleClick = () => {
        setCounter((prevCount) => prevCount + 1)
    }

    return (<div>
        <p>Current Count: {counter}</p>
        <button onClick={handleClick} />
    </div>);
}

export default CounterButton
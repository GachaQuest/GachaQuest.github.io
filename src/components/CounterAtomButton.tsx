import React from 'react'
import { useAtom } from 'jotai'
import { counterAtom } from '../gameState'


const CounterAtomButton: React.FunctionComponent = ({ }) => {
    const [counter, setCounter] = useAtom(counterAtom)

    const handleClick = () => {
        setCounter((prevCount) => prevCount + 1)
    }

    return (<div>
        <p>Current Count: {counter}</p>
        <button onClick={handleClick} />
    </div>);
}


export default CounterAtomButton
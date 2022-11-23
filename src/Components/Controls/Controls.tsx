import React, { useState } from 'react';
import './Controls.css';

type Props = {
    setTimeInSeconds: Function
}

function Controls(props:Props) {
    const { setTimeInSeconds } = props;
    const [intervalId, setIntervalId] = useState<number>(0);
    const [playbuttonState, setPlayButtonState] = useState<boolean>(true);

    const handlePlayButton = (e: object) => {
        setPlayButtonState(false)
        const interval:any = setInterval(() => {
            setTimeInSeconds((previousState:number) => previousState + 1);
        }, 20);

        setIntervalId(interval);
    }

    const handleStopButton = () => {
        setPlayButtonState(true)
        clearInterval(intervalId);
    }

    const handleReset = () => {
        clearInterval(intervalId);
        setTimeInSeconds(0);
    }

    return(
        <div className="control">
            {playbuttonState ? (
                <button onClick={handlePlayButton} type="button">Play</button>
            ) : (
                <button onClick={handleStopButton} type="button">Stop</button>
            )}
            <button onClick={handleReset} type="button">Reset</button>
        </div>
    );
}

export default Controls;
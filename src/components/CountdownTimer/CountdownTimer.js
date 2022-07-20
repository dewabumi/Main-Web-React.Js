import React from 'react';
import {useState, useEffect} from 'react';
import './CountdownTimer.css';
import {getRemainingTimeUntilMsTimestamp} from './Utils/CountdownTimerUtils';

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

const CountdownTimer = ({countdownTimestampMs}) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs);
        }, 1000);
        return () => clearInterval(intervalId);
    },[countdownTimestampMs]);

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }

    return(
        <div className="countdown-timer">
            <h3>Promo ini berakhir dalam : </h3>
            <div>
            <span className="two-numbers">{remainingTime.days}</span>
            <span>hari</span>
            <span className="two-numbers">{remainingTime.hours}</span>
            <span>jam</span>
            <span className="two-numbers">{remainingTime.minutes}</span>
            <span>menit</span>
            <span className="two-numbers">{remainingTime.seconds}</span>
            <span>detik</span>
            </div>
        </div>
    );
}

export default CountdownTimer;
function calculateTimeInSeconds(timeInSeconds: number): (number | string)[] {
    let minutes:number = Math.floor((timeInSeconds) / 60);
    let seconds:number = timeInSeconds - Math.floor(timeInSeconds / 3600) - (minutes * 60);
    
    return [
    `0${minutes}` ,
    seconds < 10 ? `0${seconds}` : seconds
    ];
}

export default calculateTimeInSeconds;
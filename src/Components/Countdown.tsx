import { useEffect, useReducer } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { useGlobal } from '../state';

export default function Countdown() {
  const [state] = useGlobal();
  const { seconds, timerId, limit } = state;
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  return (
    <div>
      <CountdownCircleTimer
        isPlaying
        duration={limit}
        onComplete={(totalElapsedTime) => {
          console.log(totalElapsedTime);
        }}
        colors={[
          ['#004777', 0.33],
          ['#F7B801', 0.33],
          ['#A30000', 0.33],
        ]}
      >
        {({ remainingTime }) => {
          return remainingTime ? remainingTime + 1 : 0;
        }}
      </CountdownCircleTimer>
    </div>
  );
}

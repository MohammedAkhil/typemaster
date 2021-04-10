import { useEffect, useRef } from 'react';
import { useGlobal } from '../state';
import { netWpm } from '../utils';
import { usePrevious } from './usePrevious';

export const useWpm = () => {
  const [{ input, seconds, text, timerId, limit }] = useGlobal();
  const wpm = useRef(0);
  const prevSecond = usePrevious(seconds);

  useEffect(() => {
    if (seconds === prevSecond) {
      return;
    }

    if (seconds === limit) {
      wpm.current = 0;
      return;
    }

    wpm.current = netWpm(text, input, seconds);
  }, [input, text, seconds, prevSecond, limit, timerId]);

  return wpm;
};

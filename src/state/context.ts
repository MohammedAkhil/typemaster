import { useGlobal } from '.';

export const useTyping = () => {
  const [state, actions] = useGlobal();

  const onInput = (value: string) => {
    if (!state.timerId) {
      startTimer();
    }

    if (value.length >= state.text.length && state.timerId) {
      stopTimer();
    }

    actions.setInput(value);
  };

  const startTimer = () => {
    const timerId = (setInterval(
      () => actions.setTick(),
      1000
    ) as unknown) as number;
    actions.setTick(true);
    actions.setTimer(timerId);
  };

  const stopTimer = () => {
    clearInterval(state.timerId);
    actions.setTimer();
  };

  const onReset = () => {
    stopTimer();
    actions.setTick(true);
    actions.setInput('');
  };

  return { state, onInput, onReset, stopTimer };
};

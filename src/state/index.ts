import globalHook, { Store } from 'use-global-hook';
import React from 'react';

export type State = {
  text: string;
  input: string;
  seconds: number;
  timerId?: number;
  limit: number;
};

// Associated actions are what's expected to be returned from globalHook
export type Actions = {
  setTimer: (timerId?: number) => void;
  setInput: (input: string) => void;
  setTick: (reset?: boolean) => void;
  setLimit: (limit: number) => void;
};

const setInput = (store: Store<State, Actions>, input: string) => {
  store.setState({
    ...store.state,
    input,
  });
};

const setTimer = (
  store: Store<State, Actions>,
  timerId: number | undefined = undefined
) => {
  store.setState({ ...store.state, timerId });
};

const setTick = (store: Store<State, Actions>, reset = false) => {
  if (store.state.timerId && store.state.limit - store.state.seconds === 0) {
    clearInterval(store.state.timerId);
    store.actions.setTimer();

    return;
  }
  store.setState({
    ...store.state,
    seconds: reset ? 0 : store.state.seconds + 1,
  });
};

const setLimit = (store: Store<State, Actions>, limit: number) => {
  store.setState({
    ...store.state,
    limit,
  });
};

const initialState: State = {
  text:
    'Just some typing speed test that you really need to focus on. Not sure how you manage though. Hooks are a new addition in React that lets you use state and other React features without writing a class. This website provides easy to understand code examples to help you learn how hooks work and inspire you to take advantage of them in your next project.',
  input: '',
  seconds: 0,
  timerId: undefined,
  limit: 60,
};

// actions passed to globalHook do not need to be typed
const actions = {
  setInput,
  setTick,
  setTimer,
  setLimit,
};

export const useGlobal = globalHook<State, Actions>(
  React,
  initialState,
  actions
);

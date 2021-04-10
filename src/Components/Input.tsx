import React, { useEffect } from 'react';
import { useOnClickOutside } from '../hooks/useOnClickOutside';
import { useTyping } from '../state/context';
import { isComplete } from '../utils';
import '../App.css';

interface IProps {
  inputRef: React.RefObject<HTMLTextAreaElement>;
}

export default function Input({ inputRef }: IProps) {
  const {
    state: { input, timerId, seconds, limit, text },
    onInput,
  } = useTyping();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleChange = (e: any) => {
    e.preventDefault();
  };

  // focus the hidden input
  useOnClickOutside(inputRef, () => {
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 100);
  });

  return (
    <div className="input">
      <textarea
        ref={inputRef}
        disabled={
          (!!timerId && seconds === limit) || isComplete(input, text, timerId)
        }
        className="input"
        placeholder="type to start test"
        value={input}
        onChange={(e) => onInput(e.target.value)}
        onCut={handleChange}
        onCopy={handleChange}
        onPaste={handleChange}
        onKeyDown={(event) => {
          if (
            [
              'ArrowUp',
              'ArrowRight',
              'ArrowDown',
              'ArrowLeft',
              'Meta',
            ].includes(event.key)
          ) {
            event.preventDefault();
          }
        }}
      />
    </div>
  );
}

import { Box } from '@chakra-ui/layout';
import React, { FunctionComponent } from 'react';
import { useTyping } from '../../state/context';
import './Preview.css';

export const Preview: FunctionComponent = () => {
  const {
    state: { text, input },
  } = useTyping();
  const previewText = text.split('').map((s, i) => {
    let color = '';
    if (i < input.length) {
      color = s === input[i] ? 'green' : 'red';
    }
    return (
      <span key={`${s}_${i}`} className={color}>
        {s}
      </span>
    );
  });

  return (
    <Box p="8" fontSize="2xl" color="gray.600" fontWeight="light">
      {previewText}
    </Box>
  );
};

import { UseCounterProps } from '@/interfaces/components/stepper/types';
import { useState, useCallback } from 'react';

export const useCounter = ({ initialValue, min = 1, max = Infinity, onChange }: UseCounterProps) => {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      if (newCount <= max) {
        onChange?.(newCount);
        return newCount;
      }
      return prevCount;
    });
  }, [max, onChange]);

  const decrement = useCallback(() => {
    setCount((prevCount) => {
      const newCount = prevCount - 1;
      if (newCount >= min) {
        onChange?.(newCount);
        return newCount;
      }
      return prevCount;
    });
  }, [min, onChange]);

  return { count, increment, decrement };
};
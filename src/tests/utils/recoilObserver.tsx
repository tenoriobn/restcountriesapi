/* eslint-disable no-unused-vars */
import { RecoilState, useRecoilValue } from 'recoil';
import { useEffect } from 'react';

interface RecoilObserverProps<T> {
  node: RecoilState<T>;  // Tipo do atom ou selector
  onChange: (value: T) => void;  // Callback que recebe o valor atualizado
}

export const RecoilObserver = <T,>({ node, onChange }: RecoilObserverProps<T>) => {
  const value = useRecoilValue(node);

  useEffect(() => {
    onChange(value);
  }, [onChange, value]);

  return null;
};
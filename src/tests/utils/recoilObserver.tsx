/* eslint-disable no-unused-vars */
import { useRecoilValue } from 'recoil';
import { useEffect } from 'react';
import { RecoilObserverProps } from 'src/common/interfaces/IRecoilObserverProps';

export const RecoilObserver = <T,>({ node, onChange }: RecoilObserverProps<T>) => {
  const value = useRecoilValue(node);

  useEffect(() => {
    onChange(value);
  }, [onChange, value]);

  return null;
};
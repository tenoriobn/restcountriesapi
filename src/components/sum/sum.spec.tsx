import { describe, it, expect } from 'vitest';
import sum from './sum';

describe('Test sum function', () => {
  it('should correctly sum two numbers', () => {
    const result = sum(1, 2);
    expect(result).toBe(3); // Verifica se a soma de 1 e 2 resulta em 3
  });
});
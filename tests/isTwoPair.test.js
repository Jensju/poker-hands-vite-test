import { expect, test } from 'vitest';
import Hand from '../Hand.js';
import CompareHands from '../CompareHands.js';

const suits = '♥♦♣♠';

test('Test that a two pair hand returns truthy if there is two pair', () => {
  let hand = new Hand('♣9', '♦K', '♠9', '♣Q', '♣K');
  expect(CompareHands.isTwoPair(hand)).toBeTruthy();
});

test('Test that a two pair hand returns falsy if there is not two pair', () => {
  let hand = new Hand('♥7', '♦3', '♣7', '♠2', '♠8');
  expect(CompareHands.isTwoPair(hand)).toBeFalsy();
});

test('check that isTwoPar returns a higher score for a stronger hand (in a two hand scenario, but one is of a weaker kind)', () => {
  let hand1 = new Hand('♣9', '♦K', '♠9', '♣Q', '♣K');
  let hand2 = new Hand('♥7', '♦3', '♣7', '♠3', '♠8');
  let hand1Score = CompareHands.isTwoPair(hand1);
  let hand2Score = CompareHands.isTwoPair(hand2);
  expect(hand1Score).toBeGreaterThan(hand2Score);
  console.log(hand1Score);
  console.log(hand2Score);
});
import { expect, test } from 'vitest';
import Hand from '../Hand.js';
import CompareHands from '../CompareHands.js';

const suits = '♥♦♣♠';

test('Test that a hand with a pair returns truthy if there is a pair', () => {
  let hand = new Hand('♣7', '♦K', '♠9', '♣Q', '♣K');
  expect(CompareHands.isOnePair(hand)).toBeTruthy();
});

test('Test that a hand with no pair returns falsy if theres no pair to be found', () => {
  let hand = new Hand('♥7', '♦3', '♣6', '♠2', '♠8');
  expect(CompareHands.isOnePair(hand)).toBeFalsy();
});

test('check that isOnePar returns a higher score for a stronger hand', () => {
  let hand1 = new Hand('♣7', '♦K', '♠9', '♣Q', '♣K');
  let hand2 = new Hand('♥J', '♦2', '♣J', '♠3', '♠8');
  let hand1Score = CompareHands.isOnePair(hand1);
  let hand2Score = CompareHands.isOnePair(hand2);
  expect(hand1Score).toBeGreaterThan(hand2Score);
  console.log(hand1Score);
  console.log(hand2Score);
});
import { expect, test } from 'vitest';
import Hand from '../Hand.js';
import CompareHands from '../CompareHands.js';

const suits = '♥♦♣♠';

// Will fail since no code written in Compare Hands yet for the method
// isThreeOfAKind
test('Test that fourOfAKind returns truthy when it is a four of a kind', () => {
  let hand = new Hand('♥7', '♦2', '♣7', '♠7', '♠7');
  expect(CompareHands.isFourOfAKind(hand)).toBeTruthy();
});

test('Test that fourOfAKind returns falsy if there is not a four of a kind', () => {
  let hand = new Hand('♥7', '♦2', '♣8', '♠3', '♠7');
  expect(CompareHands.isFourOfAKind(hand)).toBeFalsy();
});

test('check that isFourOfAKind returns a higher score for a stronger hand (if two hands both plays four of a kind)', () => {
  let hand1 = new Hand('♣2', '♣2', '♣2', '♣2', '♦4');
  let hand2 = new Hand('♦3', '♦3', '♦3', '♠3', '♦5');
  let hand1Score = CompareHands.isFourOfAKind(hand1);
  let hand2Score = CompareHands.isFourOfAKind(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score);
  console.log(hand1Score);
  console.log(hand2Score);
});

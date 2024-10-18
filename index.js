// import DeckOfCards from './DeckOfCards.js';
import Hand from './Hand.js';
import CompareHands from './CompareHands.js';

// ♥♦♣♠
// Spelhand 1 (Straight flush)
// let hand1 = new Hand('♦9', '♦T', '♦J', '♦Q', '♦K');
// let hand2 = new Hand('♣9', '♣T', '♣J', '♣Q', '♣K');

// // Spelhand tretal
// let hand1 = new Hand('♥7', '♦2', '♣7', '♠3', '♠7');
// let hand2 = new Hand('♣9', '♣T', '♣J', '♣Q', '♣K');
// console.log(CompareHands.comparer(hand1, hand2));

// // Spelhand Fyrtal
// let hand1 = new Hand('♥7', '♦7', '♣7', '♠3', '♠7');
// let hand2 = new Hand('♣9', '♦9', '♠9', '♣9', '♣K');
// console.log(CompareHands.comparer(hand1, hand2));

// // Spelhand tretal
// let hand1 = new Hand('♥7', '♦2', '♣7', '♠3', '♠7');
// let hand2 = new Hand('♣9', '♦9', '♠9', '♣Q', '♣K');
// console.log(CompareHands.comparer(hand1, hand2));

// Spelhand tvåpar
let hand1 = new Hand('♥7', '♦3', '♣7', '♠3', '♠8');
let hand2 = new Hand('♣9', '♦2', '♠9', '♣Q', '♣K');
console.log(CompareHands.comparer(hand1, hand2));


// Deck = Kortlek
// Suite = Färg
// Rank = Valör
// Shuffle = Blanda


//Titta på följande video (tips fr Max)
//https://www.youtube.com/watch?v=1yaqKDHhktI


let result = (function() {
    "use strict";
    const FACES = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    const SUITS = {
        SPADES: "♠",
        HEARTS: "♥",
        DIAMONDS: "♦",
        CLUBS: "♣"
    };

    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        set face(face) {
            if(!FACES.includes(face)) {
                throw new Error("Invalid card face: " + face);
            }
            this._face = face;
        }

        get face() {
            return this._face;
        }

        set suit(suit) {
            if(!Object.keys(SUITS).map(k => k = SUITS[k]).includes(suit)){
                throw new Error("Invalid card suit: " + suit);
            }
            this._suit = suit;
        }

        get suit() {
            return this._suit;
        }
    }

    return {
        Suits: SUITS,
        Card: Card
    };

}());

let Card = result.Card;
let Suits = result.Suits;

let card = new Card("Q", Suits.CLUBS);
card.face = "A";
card.suit = Suits.DIAMONDS;
//let card2 = new Card("1", Suits.DIAMONDS);

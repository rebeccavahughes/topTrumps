class TopTrumps {
    constructor(name, intelligence) {
        this.name = name;
        this.intelligence = intelligence;
    }
}

// scalable with possibility of more values to be used. Looking at MVP here for 1 stat. 
// nice use. 

class animal extends TopTrumps {
    constructor(name, intelligence) {
        super(name, intelligence)
    }
}

// first look - due to the extension taking the same from the parent, is this needed? Yes, it is when we expand our game.
// intelligence won't be in all decks so that shouldn't be in the parent. 
const lion = new animal("Lion", 77);
const elephant = new animal("Elephant", 70);
const snail = new animal("Snail", 70);
const orangutan = new animal("Orangutan", 70);
const goldfish = new animal("Goldfish", 70);
const tiger = new animal("Tiger", 70);
const zebra = new animal("Zebra", 70);
const giraffe = new animal("Giraffe", 70);
const crocodile = new animal("Crocodile", 70);
const cheetah = new animal("Cheetah", 70);
const bear = new animal("Bear", 70);
const rhino = new animal("Rhino", 70);
const eagle = new animal("Eagle", 50);
const penguin = new animal("Penguin", 50);
const octopus = new animal("Octopus", 50);
const otter = new animal("otter", 50)
const chicken = new animal("Chicken", 50);
const wildebeest = new animal("Wildebeest", 50);
const snake = new animal("Snake", 50);
const camel = new animal("Camel", 50);
const shark = new animal("Shark", 50);
const komodoDragon = new animal("Komodo Dragon", 30);
const gazelle = new animal("Gazelle", 30);
const wolf = new animal("Wolf", 30);
const chimp = new animal("Chimpanzee", 30);
const impala = new animal("Impala", 30);
const panda = new animal("Panda", 20);
const owl = new animal("Owl", 30);
const orca = new animal("Orca", 30);
const wasp = new animal("Wasp", 30);

// this could be pulled from another file later down the line. 
// keeping it tidy, you want your code to do as little as possible. 


let gameStarted = false,
    gameOver = false,
    player1Won = false,
    player2Won = false,
    player1Cards = [],
    player2Cards = [],
    drawPile = [],
    deck = [],
    player1hand = [],
    player2hand = [];

    // player class - with objects...
    // leave for now, do not tackle this yet. 

deck.push(lion, elephant, snail, orangutan, goldfish, tiger, zebra, giraffe, crocodile, cheetah, bear, rhino, eagle, penguin, octopus,
    otter, chicken, wildebeest, snake, camel, shark, komodoDragon, gazelle, wolf, chimp, impala, panda, owl, orca, wasp);
    // nice array - clearly laid out. 

const shuffleCards = (deck) => {
    for (let i = deck.length - 1; i > 0; i--) {
        const swapIndex = Math.floor(Math.random() * (i + 1))
        const currentCard = deck[i];
        const cardToSwap = deck[swapIndex]
        deck[i] = cardToSwap
        deck[swapIndex] = currentCard
    }
    return deck
}
// nice, can we clean this up? Variable names well worded, clear but could they be confusing? Potentially later down the line. 

const checkGameOver = () => {
    if (gameOver) {
        if (player1Won) {
            console.log("You win!!!")
        } else {
            console.log("Computer Wins... :(")
        }
    }
}

const endOfGame = () => {
    if (player1Cards.length == 30 || player2Cards.length == 0) {
        gameOver = true
        player1Won = true
        checkGameOver()
    } else if (player2Cards.length == 30 || player1Cards.length == 0) {
        gameOver = true
        player2Won = true
        checkGameOver()
    } else {
        console.log(player1Cards.length)
        console.log(player2Cards.length)
        getNextCard()
    }
}
const compareCards = () => {
    if (player1hand[0].intelligence > player2hand[0].intelligence) {
        console.log("computers card")
        console.log(player2hand[0])
        console.log("you win") 
        player1Cards = player1Cards.concat(player1hand.shift())
        player1Cards = player1Cards.concat(player2hand.shift()); 

        
        if (drawPile.length > 0) {
            player1Cards = player1Cards.concat(drawPile)
            drawPile = []
            console.log("You have won the draw pile")
        }
        endOfGame()
    } else if (player1hand[0].intelligence < player2hand[0].intelligence) {
        console.log("Computers card is:")   
        console.log(player2hand[0]);
        console.log("player2 wins")
        player2Cards = player2Cards.concat(player1hand.shift())
        player2Cards = player2Cards.concat(player2hand.shift())  
        
        if (drawPile.length > 0) {
        player2Cards = player2Cards.concat(drawPile)
        drawPile = []
        console.log("Computer has won the drawpile")
        }
        endOfGame() 
    } else if (player1hand[0].intelligence == player2hand[0].intelligence) {
        console.log("Computers card" + player2hand.intelligence + "Its a draw, cards moved to draw pile")
        drawPile = drawPile.concat(player1hand.shift())
        drawPile = drawPile.concat(player2hand.shift())
        endOfGame()
        
    }
}

const getNextCard = () => {
    player1hand = player1Cards.slice(0, 1);
    player1Cards.splice(0, 1)
    player2hand = player2Cards.slice(0, 1)
    player2Cards.splice(0, 1)
    console.log("Your card is:")
    console.log(player1hand[0])

    compareCards()
    
}

const dealCards = () => {
    player1Cards = deck.slice(0, 15);
    player2Cards = deck.slice(15);
    getNextCard()
}


const gameStart = () => {
    

    shuffleCards(deck);
    dealCards()

}
gameStart();
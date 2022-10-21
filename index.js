const userName = prompt('Enter your username: ')
console.log(`Welcome ${userName}`);

let stage = 2;

do {
  var userGuess = parseInt(prompt(`Guess a number betweeen 1 - ${stage}`));
  
  let Guess = Math.floor(Math.random()*stage) + 1;
  
    if (userGuess == Guess) {
    console.log(`you have levelled up, ${userName}.\n   
    Welocme to stage ${stage}  `)
    stage++;
    continue;
  }
  else {
    console.log('Not match')
    // continue;
  }

  
}
while (stage) {
  stage++;
  console.log(parseInt(prompt(`Guess a number from 1 -   
  ${stage} `)));  
}

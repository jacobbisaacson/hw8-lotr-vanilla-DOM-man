console.log("Linked.");

// Dramatis Personae
const hobbits = [
  `Frodo Baggins`,
  `Samwise "Sam" Gamgee`,
  `Meriadoc "Merry" Brandybuck`,
  `Peregrin "Pippin" Took`
];

const buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];

const lands = [
  'The-Shire', 
  'Rivendell', 
  'Mordor'
];


// ============
// Chapter 1
// ============

function makeMiddleEarth () { 
  console.log("1: makeMiddleEarth");

  const newSection = document.createElement('section')
  newSection.id = "middle-earth"
  console.log(newSection);

  // 1. create a section tag with an id of middle-earth -- done

  // 2. use a for loop to iterate over the lands array that does the following:

  for(let i = 0; i < lands.length; i++) {

  //   2a. creates an article tag (there should be one for each land when the loop is done)
    const articleTags = document.createElement('article')
  //   2b. gives each land article an `id` tag of the corresponding land name
    articleTags.id = lands[i]
  //   2c. includes an h1 with the name of the land inside each land article
    articleTags.innerHTML = `<h1> ${lands[i]} </h1>`
  //   2d. appends each land to the middle-earth section
    newSection.appendChild(articleTags)
  }

  // 3. append the section to the body of the DOM.
  document.body.appendChild(newSection)

}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

// 1. create the element, 2. give it values, 3. append them to the parent

function makeHobbits() {
  console.log("2: makeHobbits");

  // display an `unordered list` of hobbits in the shire
  const hobbitsList = document.createElement('ul')
  hobbitsList.id = "list-of-hobbits"
  // hobbitList.classList.add("hobbits")
  const theShire = document.getElementById('The-Shire')
  theShire.appendChild(hobbitsList)

  // give each hobbit a class of `hobbit`

  for(let i = 0; i < hobbits.length; i++) {
    const hobbitsNames = document.createElement('li')
    hobbitsNames.classList.add('hobbit')
    hobbitsNames.innerText = hobbits[i]
    hobbitsList.appendChild(hobbitsNames)
  }
  // hint: create a 'ul' outside the loop into which to append the 'li's
  // hint: get 'The-Shire' by using its id

}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".


// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() { 
  console.log("3: keepItSecretKeepItSafe");

  // create a div with an id of `'the-ring'`
  const theRingDiv = document.createElement('div')
  theRingDiv.id = "the-ring"
  // give the div a class of `'magic-imbued-jewelry'`
  theRingDiv.classList.add("magic-imbued-jewelry")
  document.getElementById("list-of-hobbits").firstChild.appendChild(theRingDiv); 
  //https://developer.mozilla.org/en-US/docs/Web/API/Node/firstChild (((ABOUT FIRST CHILD)))
  // the ring is showing in div id under frodo (last one makes new div for frodo outside of hobbits)

  // add the ring as a child of `Frodo`

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".


// ============
// Chapter 4
// ============

function makeBaddies() { 
  console.log("4: makeBaddies");

  const makeBaddiesList = document.createElement('ul');
  makeBaddiesList.id = "list-of-baddies";
  // display an unordered list of baddies in Mordor
  for(let i = 0; i < baddies.length; i++) {
    let newBaddies = document.createElement('li')
    newBaddies.classList.add("baddy")
  // give each of the baddies a class of "baddy"
    newBaddies.innerText = baddies[i]
    makeBaddiesList.appendChild(newBaddies);
    document.getElementById('Mordor').appendChild(makeBaddiesList);

  // remember to append them to Mordor
  //getting undefineds, dont care, moving on

  }
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..


// ============
// Chapter 5
// ============

function makeBuddies () { 
  console.log("5: makeBuddies");

  const rivendellLocation = document.createElement('aside')
  // create an `aside` tag
  const buddiesList = document.createElement('ul')
  // put an `unordered list` of the `'buddies'` in the aside
  buddiesList.id = "buddies-list"
  for(let i = 0; i < buddies.length; i++) {
    let newBuddies = document.createElement('li')
    newBuddies.innerText = buddies[i]
    buddiesList.appendChild(newBuddies)
  }
  rivendellLocation.appendChild(buddiesList)
  document.getElementById('Rivendell').appendChild(rivendellLocation) // this is all same as the last one basically
  // insert your aside as a child element of `rivendell`

  //still getting undefined's dont care moving on

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".


// ============
// Chapter 6
// ============

function leaveTheShire() { 
  console.log("6: leaveTheShire");

  const getHobbits = document.getElementById("list-of-hobbits")
  const rivendellLocation = document.getElementById("Rivendell")
  rivendellLocation.appendChild(getHobbits)
//buddies in there
  // assemble the `hobbits` and move them to `rivendell`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"


// ============
// Chapter 7
// ============

function beautifulStranger() { 
  console.log("7: beautifulStranger");

const getStriderInRivendell = document.getElementsByTagName('li')[3].textContent = "aragorn" //becasue he;s in rivendell

console.log(getStriderInRivendell);
//significant timm help

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"


// ============
// Chapter 8
// ============


// use console logs instead of alerts, then change them to alerts when submitting
function forgeTheFellowShip() { 
  console.log("8: forgeTheFellowShip");

  // create a new div called `'the-fellowship'` within `rivendell`

  const fellowship = document.createElement('div')
  
  fellowship.id = 'the-fellowship'

  fellowship.innerHTML = 'the-fellowship'
  
  const rivendellLocation = document.getElementById('Rivendell')

  
  rivendellLocation.appendChild(fellowship)
  // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`

  fellowshipLocation = document.getElementById('the-fellowship')
  console.log(fellowshipLocation)

  const curHobbit = document.getElementsByClassName('hobbits')
  for(let i = 0; i < curHobbit.length; i++){
    
    fellowshipLocation.appendChild(curHobbit[i])
    
    // after each character is added make an alert that they // have joined your party
    alert(`${hobbits[i]} has joined your party!`)  
  }
  
  const curBuddy = document.getElementsByClassName('buddies')
  for(let i = 0; i < curBuddy.length; i++){

    fellowshipLocation.appendChild(curBuddy[i])

    // after each character is added make an alert that they // have joined your party
    alert(`${buddies[i]} has joined your party!`)
  }
  // NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() { 
  console.log("9: theBalrog");
   const gandalf = document.getElementById("the-fellowship")  
   // change the `'Gandalf'` text to `'Gandalf the White'`
      gandalf.innerHMTL = "Gandalf the White"
      gandalf.innerText = "Gandalf the White"
      gandalf.style.background = "white"
      gandalf.style.border = "3px solid grey"
   // apply the following style to the element, make the // background 'white', add a grey border
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"


// ============
// Chapter 10
// ============

function hornOfGondor() { 
  console.log("10: hornOfGondor");
  // pop up an alert that the horn of gondor has been blown
  alert(`The horn of gondor has been blown!`)
  // // Boromir's been killed by the Uruk-hai!
  alert(`Boromir's been killed by the Uruk-hai!`)
  // Remove `Boromir` from the Fellowship

  const fellowshipLocation = document.getElementById("the-fellowship")
  const boromirLocation = document.getElementById("buddies") // dunno
  boromirLocation.remove() // this isn't working
  console.log(boromirLocation)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"


// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() { 
  console.log("11: itsDangerousToGoAlone");
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`

  const mordorLocation = document.getElementById('Mordor')
  const frodoLocation = document.getElementById(`Frodo Baggins`)
  const samLocation = document.getElementById(`Samwise "Sam" Gamgee`)

  mordorLocation.appendChild(frodoLocation) // this isn;t working
  mordorLocation.appendChild(samLocation) // this isn't working'
  
  // add a div with an id of `'mount-doom'` to `Mordor`

  const mountDoom = document.createElement('div')
  mountDoom.id = 'mount-doom'
  mountDoom.innerHTML = "mount-doom"
  mordorLocation.appendChild(mountDoom)

}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"


// ============
// Chapter 12
// ============

function weWantsIt() { 
  console.log("12: weWantsIt");
  // Create a div with an id of `'gollum'` and add it to Mordor
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  // Move Gollum into Mount Doom
}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() { 
  console.log("13: thereAndBackAgain");
  // remove `Gollum` and `the Ring` from the document
  // Move all the `hobbits` back to `the shire`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".


// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================


document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth);
document.getElementById('chapter-2').addEventListener('click', makeHobbits);
document.getElementById('chapter-3').addEventListener('click', keepItSecretKeepItSafe);
document.getElementById('chapter-4').addEventListener('click', makeBaddies);
document.getElementById('chapter-5').addEventListener('click', makeBuddies);
document.getElementById('chapter-6').addEventListener('click', leaveTheShire);
document.getElementById('chapter-7').addEventListener('click', beautifulStranger);
document.getElementById('chapter-8').addEventListener('click', forgeTheFellowShip);
document.getElementById('chapter-9').addEventListener('click', theBalrog);
document.getElementById('chapter-10').addEventListener('click', hornOfGondor);
document.getElementById('chapter-11').addEventListener('click', itsDangerousToGoAlone);
document.getElementById('chapter-12').addEventListener('click', weWantsIt);
document.getElementById('chapter-13').addEventListener('click', thereAndBackAgain);
document.getElementById('all-chapters').addEventListener('click', () => {
  makeMiddleEarth();
  makeHobbits();
  keepItSecretKeepItSafe();
  makeBaddies();
  makeBuddies();
  leaveTheShire();
  beautifulStranger();
  forgeTheFellowShip();
  theBalrog();
  hornOfGondor();
  itsDangerousToGoAlone();
  weWantsIt();
  thereAndBackAgain();
});

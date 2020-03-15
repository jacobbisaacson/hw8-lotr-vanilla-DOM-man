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
  ;

  // 1. create a section tag with an id of middle-earth

  const middleEarth = document.createElement('section') //create tag
  middleEarth.id = "middle-earth" //creates id


  // console.log(middleEarth)

  // 2. use a for loop to iterate over the lands array that does the following:



  for(let i = 0; i < lands.length; i++){

      //   2a. creates an article tag (there should be one for each land when the loop is done)

      const land = document.createElement('article') //create tag

      //   2b. gives each land article an `id` tag of the corresponding land name

      land.id = `${lands[i]}`

      // //   2c. includes an h1 with the name of the land inside each land article
      
      land.innerHTML = `<h1>${lands[i]}</h1>`
   
      //   2d. appends each land to the middle-earth section
     
      middleEarth.appendChild(land)
      // console.log("land :", land)
  }
      // console.log("middleEarth :", middleEarth)

  // 3. append the section to the body of the DOM.
  document.body.appendChild(middleEarth)
}




// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
  // console.log("2: makeHobbits");
  
  // display an `unordered list` of hobbits in the shire
//----------------------------------------------------------------------------------------------------
  // hint: get 'The-Shire' by using its id
  const shireLocation = document.getElementById(lands[0])
// hint: create a 'ul' outside the loop into which to append the 'li's
  const hobbitList = document.createElement('ul')
  hobbitList.id = "hobbitsList"
  shireLocation.appendChild(hobbitList)
 
  for(let i = 0; i < hobbits.length; i++){
    
    const hobbit = document.createElement('li')
    // give each hobbit a class of `hobbit`
    hobbit.classList.add('hobbit') //created hobbit class
    hobbit.id = hobbits[i]
    hobbit.innerHTML = hobbits[i]
    hobbitList.appendChild(hobbit) // appended hobbit to hobbitList , already appended to shire
  }

  console.log(document.body)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".


// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() { 
  console.log("3: keepItSecretKeepItSafe");

  // create a div with an id of `'the-ring'`
  const ring = document.createElement('div')
  ring.id = 'the-ring'
  // give the div a class of `'magic-imbued-jewelry'`
  ring.classList.add('magic-imbued-jewelry')
  // add the ring as a child of `Frodo`
  const frodoLocation = document.getElementById(hobbits[0])
  frodoLocation.appendChild(ring)
  // console.log(document.body)

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".


// ============
// Chapter 4
// ============

function makeBaddies() { 
  console.log("4: makeBaddies");

  // display an unordered list of baddies in Mordor
  const mordorLocation = document.getElementById(lands[2])
  let baddiesUL = document.createElement('ul')
  baddiesUL.id = 'baddiesList'
  // give each of the baddies a class of "baddy"

  for(let i = 0; i < baddies.length; i++){
    
    const baddy = document.createElement('li')
    baddy.classList.add("baddy")
    baddy.id = baddies[i]
    baddiesUL.appendChild(baddy)
    baddy.innerHTML = baddies[i]
  }

  // remember to append them to Mordor
  mordorLocation.appendChild(baddiesUL)

  // console.log(document.body)

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..


// ============
// Chapter 5
// ============

function makeBuddies () { 
  console.log("5: makeBuddies");
  
  // create an `aside` tag
   let buddiesAside = document.createElement('aside')
  // put an `unordered list` of the `'buddies'` in the aside
   const buddiesUL = document.createElement('ul')

   for(let i = 0; i < buddies.length; i++){
      const buddy = document.createElement('li')

      buddy.id = buddies[i];

      buddy.classList.add("buddy")
      
      buddiesUL.appendChild(buddy)

      buddy.innerHTML = buddies[i]
   }
  buddiesAside.appendChild(buddiesUL)
  // insert your aside as a child element of `rivendell`
  const rivendellLocation = document.getElementById(lands[1])

  rivendellLocation.appendChild(buddiesAside)
  
  // console.log(document.body)


}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".


// ============
// Chapter 6
// ============

function leaveTheShire() { 
  console.log("6: leaveTheShire");
  
  // assemble the `hobbits` and move them to `rivendell`
  const rivendellLocation = document.getElementById(lands[1])
  const hobbitsGroupLocation = document.getElementById("hobbitsList")
  rivendellLocation.appendChild(hobbitsGroupLocation)

  // console.log(document.body)

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"


// ============
// Chapter 7
// ============

function beautifulStranger() { 
  console.log("7: beautifulStranger");

  
  // change the `'Strider'` text to `'Aragorn'`
  buddies[3] = "Aragorn"

  const striderLocation = document.getElementById('Strider')
  striderLocation.id = "Aragorn"
  striderLocation.innerHTML = "Aragorn"

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"


// ============
// Chapter 8
// ============

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

  for(let i = 0; i < hobbits.length; i++){
    const curHobbit = document.getElementById(hobbits[i])
    fellowshipLocation.appendChild(curHobbit)
    // after each character is added make an alert that they // have joined your party
    alert(`${hobbits[i]} has joined your party!`)  
  }
  
  for(let i = 0; i < buddies.length; i++){
    const curBuddy = document.getElementById(buddies[i])
    fellowshipLocation.appendChild(curBuddy)
    // after each character is added make an alert that they // have joined your party
    alert(`${buddies[i]} has joined your party!`)
  }
  // NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.

}

// COMMIT YOUR WORK

// ============
// Chapter 9
// ============

function theBalrog() { 
  console.log("9: theBalrog");
   // change the `'Gandalf'` text to `'Gandalf the White'`
   buddies[0] = 'Gandalf the White'
   // apply the following style to the element, make the // background 'white', add a grey border
   const gandalfLocation = document.getElementById('Gandalf the Grey')
   gandalfLocation.innerHTML = 'Gandalf the White'
   gandalfLocation.id = 'Gandalf the White'
   gandalfLocation.style.backgroundColor = "white";
   gandalfLocation.style.border = "3px solid grey"
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

  const boromirLocation = document.getElementById(buddies[4])
  // console.log(boromirLocation)
  boromirLocation.remove()

  const fellowshipLocation = document.getElementById("the-fellowship")

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

  mordorLocation.appendChild(frodoLocation)
  mordorLocation.appendChild(samLocation)
  
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
  const gollum = document.createElement('div')
  gollum.id = 'gollum'
  const mordorLocation = document.getElementById('Mordor')
  mordorLocation.appendChild(gollum)


//   Remove `the ring` from `Frodo` and give it to `Gollum`
  const ringLocation = document.getElementById('the-ring')
  const frodoLocation = document.getElementById(`Frodo Baggins`)
  const gollumLocation = document.getElementById('gollum')
  gollumLocation.appendChild(ringLocation)


//   Move Gollum into Mount Doom
  const mountDoomLocation = document.getElementById('mount-doom')

  mountDoomLocation.appendChild(gollumLocation)


}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() { 
  console.log("13: thereAndBackAgain");
  

  // remove `Gollum` and `the Ring` from the document
  const gollumLocation = document.getElementById('gollum')
  const ringLocation = document.getElementById('the-ring')
  ringLocation.remove()
  gollumLocation.remove()

  // Move all the `hobbits` back to `the shire`

  const hobbitClassLocation = document.getElementsByClassName("hobbit")

  // console.log("hobbit class location", hobbitClassLocation)
  
  const shireLocation = document.getElementById('The-Shire')
  
  for(let i = 0; i < hobbits.length; i++){
    const curHobbit = hobbits[i];
    const hobbitLocation = document.getElementById(curHobbit);
    console.log(shireLocation)
    shireLocation.appendChild(hobbitLocation)
  }


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

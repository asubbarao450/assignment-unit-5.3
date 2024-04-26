console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

// Create an empty array named `myCollection`.

let myCollection = [];

// - Create a function named `addToCollection`. It should have this basic structure:
//   - ```js
//       function addToCollection(collection, title, artist, yearPublished) {
//         // your code here...

function addToCollection(collection, title, artist, yearPublished) {

  //creates an album object with 3 attributes
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished

  };

  //pushes the album object into the myCollection/inputted Array
  //this is different than before as you are pushing an object into an Array rather than string or an int
  collection.push(album);

  return album;

}

// test cases of various album types being created
addToCollection(myCollection, "One That Got Away", "Katy Perry", 2010);
addToCollection(myCollection, "Dark Horse", "Katy Perry", 2013);
addToCollection(myCollection, "California Girls", "Katy Perry", 2010);
addToCollection(myCollection, "Erase Your Social", "Lil Uzi Vert", 2016);
addToCollection(myCollection, "Nachna", "Babbulicious", 2024);
addToCollection(myCollection, "Koka", "Kanika Kapoor", 2024);


console.log(myCollection);
// - Use and Test the `addToCollection` function:
//   - Add 6 albums to the `myCollection` array. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//   - `console.log` each album as added using the function's returned value.
//   - After all are added, console.log the `myCollection` array.

// - Create a function named `showCollection`. This function should:
//   - Take in a `collection` parameter. (This allows it to be reused to show any array of album objects.)
//   - Loop through the `collection` and `console.log` each album's information formatted **within a single string**, like: `TITLE by ARTIST, published in YEARPUBLISHED`.

function showCollection(collection) {

  for (x of collection) {
    console.log(`${x.title} by ${x.artist} published in ${x.yearPublished}`);
    //`` and ${} allow for album information to be outputted on a single string
  }
}
console.log(showCollection(myCollection));// - Test the `showCollection` function.

// - Add a function named `findByArtist`. This function should:
//   - Take in a `collection` parameter. Remember, we want to be able to search any collection!
//   - Take in an `artist` (string) parameter.
//   - Create an empty array to hold any matching results, if any.
//   - Loop through the `collection` and add any album objects with a matching artist to the array.
//   - Return the array with the matching results. (If no results are found, an empty array should be returned.)


function findByArtist(collection, artist) {

  let toReturn = [];
  //whenever you create an empty Array to add unknown items make sure to use 
  //pop function. If not the array length will stay at 1


  for (let c = 0; c < collection.length; c++) {


    if (collection[c].artist === artist) {
      //checks if the array item's artist attribute matches 
      //artist that we are trying to find

      toReturn.push(collection[c]);
      //adds correct album item to toReturn Array

    }

  }
  return toReturn;
}

console.log(findByArtist(myCollection, "Kanika Kapoor"));

// > When testing your functions, write all tests in the JavaScript file!


// ### Stretch Goal

// - Create a function called `search` that will allow for searching by `artist` **and** `yearPublished`. This function should:
//   - Take in a `collection` parameter.
//   - Take in a `searchCriteria` parameter. Create your solution based on a *search object* that has these properties:
//     - ```
//       { artist: 'Ray Charles', yearPublished: 1957 }
//       ```
//   - The returned output from `search` should meet these requirements:
//     - Return a new array of all items in the `collection` matching **all** of the search criteria.
//     - If no results are found, return an empty array.
//     - If there is no search object, an empty search object, or missing `artist`/`yearPublished` data provided as input, `return` **all albums** from the `collection` being searched.

// ### Extra Stretchy Stretch Goals

// - **NOTE**: The following stretch goals **do not have tests** associated with them.
//   - This means it's even more important to use *your own `console.log` skills* to verify that your code behaves as you expect.
// - Add an array of `tracks` to each of your album objects. Each track should have a `name` and `duration`. You will need to update the functions to support this new property:
//   - Update the `addToCollection` function to also take an input parameter for the array of tracks.
//   - Update the `showCollection` function to display the list of tracks for each album with its name and duration.
//   - ```
//     TITLE by ARTIST, published in YEARPUBLISHED:
//         1. NAME: DURATION
//         2. NAME: DURATION
//         3. NAME: DURATION
//     TITLE by ARTIST, published in YEARPUBLISHED:
//         1. NAME: DURATION
//         2. NAME: DURATION
//     ```
//   - Update `search` to allow an optional `trackName` search criteria. 
//     - IF the search object has a `trackName` property, only search for that, *ignoring* any `artist` or `yearPublished` properties.

// > Make sure to test all your code!









// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}

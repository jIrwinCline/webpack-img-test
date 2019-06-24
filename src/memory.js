


export function randomize() {
  let animalsRandom = [];
  const animals = ['quokka', 'honeybadger', 'jackalope', 'cuttlefish', 'trex', 'aye', 'blobfish', 'dog','quokka', 'honeybadger', 'jackalope', 'cuttlefish', 'trex', 'aye', 'blobfish', 'dog'];
  let tempAnimalHolder = animals;
  while (tempAnimalHolder.length !== 0) {
    let tester = Math.floor(Math.random() * tempAnimalHolder.length);
    animalsRandom.push(tempAnimalHolder[tester]);
    tempAnimalHolder.splice(tester, 1);
  }
  while (tempAnimalHolder.length !== 0) {
    let tester = Math.floor(Math.random() * tempAnimalHolder.length);
    animalsRandom.push(tempAnimalHolder[tester]);
    tempAnimalHolder.splice(tester, 1);
  }
  return animalsRandom;
}

// export function displayCards(array) {
//   array.forEach(function (array) {
//     htmlforCards += "<div class='animal-cards' " +  + ">" +
//     "<div class='card' style='width: 18rem;'> <img id=" + movie.id + " class='card-img-top' src=" + movie.image + " alt=''> <div class='card-body'> <h5 class='card-title'>" + movie.name + "</h5> </div></div></div>";
//   });
// }

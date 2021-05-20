const welcome = function () {
    console.log("Greetings stranger");
}

function receivesAFunction(callback) {
    //welcome();
    console.log(callback());
}

 
//receivesAFunction(  );

function returnsANamedFunction() {
    return welcome;
}

function returnsAnAnonymousFunction() {
    return function() {console.log("This should work");}
}























// function morningRoutine(exercise) {
//     let breakfast;
  
//     if (exercise === liftWeights) {
//       breakfast = 'protein bar';
//     } else if (exercise === swimFortyLaps) {
//       breakfast = 'kale smoothie';
//     } else {
//       breakfast = 'granola';
//     }
  
//     exerciseRoutine(exercise);
  
//     // we could give this function a name if we wanted to, but since
//     // it's only available _inside_ morningRoutine(), we don't need to
//     return function() {
//       console.log(`Nom nom nom, this ${breakfast} is delicious!`);
//     }
//   }
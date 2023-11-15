// CALLBACK HELL
boilWater();
console.log("chop carrots");

function boilWater() {
  console.log("boiling");
  setTimeout(() => {
    console.log("add chopped carrots to the boiling water");
    console.log("now chop onions");

    setTimeout(() => {
      console.log("Add chopped onions to the boiling water");

      setTimeout(() => {
        console.log("onions are done");
      }, 2000);
    }, 2000);
  }, 1000);
}

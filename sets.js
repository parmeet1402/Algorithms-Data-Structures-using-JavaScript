/* Sets */
function mySet() {
  // the var collection will hold the set
  let collection = [];

  // check for the presence of an element and return true or false
  this.has = element => collection.indexOf(element) !== -1;

  // return all the value in the set
  this.values = () => collection;

  // add an element to the set
  this.add = element => {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  // remove an element from the set
  this.remove = element => {
    if (this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  // size of the collection
  this.size = () => collection.length;

  /* NOT IN ES6 */
  // return the union of two sets
  this.union = otherSet => {
    let unionSet = new mySet();
    let firstSet = this.values();
    let secondSet = otherSet.values();
    firstSet.forEach(e => {
      unionSet.add(e);
    });
    secondSet.forEach(e => {
      unionSet.add(e);
    });
    return unionSet;
  };

  // return the intersection of two sets as a new set
  this.intersection = otherSet => {
    let intersectionSet = new mySet();
    let firstSet = this.values();
    firstSet.forEach(e => {
      if (otherSet.has(e)) intersectionSet.add(e);
    });
    return intersectionSet;
  };

  // difference of two sets as new set
  this.difference = otherSet => {
    let differenceSet = new mySet();
    let firstSet = this.values();
    firstSet.forEach(e => {
      if (!otherSet.has(e)) differenceSet.add(e);
    });
  };

  // subset of different set
  this.subset = otherSet => {
    let firstSet = this.values();
    return firstSet.every(value => otherSet.has(value));
  };
}

let setA = new mySet();
let setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
//console.log(setB.difference(setA).values());

let setC = new Set();
let setD = new Set();
setC.add("a");
setD.add("b");
setD.add("c");
setD.add("a");
setD.add("d");
console.log(setD.values());
setD.delete("a");
console.log(setD.has("a"));
console.log(setD.add("d"));
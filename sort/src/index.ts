import {Sorter} from './Sorter.js';
import {NumbersCollection} from './NumbersCollection.js';

const numbersCollection = new NumbersCollection ([20, 4, -5, -6]);
const sorter = new Sorter (numbersCollection);

sorter.sort();

console.log(numbersCollection.data);

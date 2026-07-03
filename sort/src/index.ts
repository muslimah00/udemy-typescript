import {Sorter} from './Sorter.js';
import {NumbersCollection} from './NumbersCollection.js';
import { CharactersCollection } from './CharactersCollection.js';

// const numbersCollection = new NumbersCollection ([20, 4, -5, -6]);
// const sorter = new Sorter (numbersCollection);

// sorter.sort();

// console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('Xaayb');
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data)
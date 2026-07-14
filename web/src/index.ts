<<<<<<< HEAD
import { User } from './models/User';

const user = new User({ name: 'myname', age: 20 });

user.on('change', () => {
  console.log('Change #1');
});
user.on('change', () => {
  console.log('Change #2');
});
user.on('save', () => {
  console.log('Save was triggered');
});

user.trigger('change');
=======
console.log('Hi there!');
>>>>>>> a1c1e51b3e33d568fdd71b1b5e33223b065b082d

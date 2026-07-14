import { User } from './models/User';

const user = new User({ name: 'New Lima', age: 20 });

user.events.on('change', () => {
  console.log('User was changed');
});

user.events.trigger('change');
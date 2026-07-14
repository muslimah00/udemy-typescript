import { User } from './models/User';

const user = new User({ name: 'New Lima', age: 20 });


user.save();
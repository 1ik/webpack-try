import {User} from './scripts/user.ts';
import {Task} from './scripts/task.ts';

const tom = new User("Tom");
const task = new Task("Code the world ");
tom.work(task);
declare var require: {
    <T>(path: string): T;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};



import {User} from './scripts/user.ts';
import {Task} from './scripts/task.ts';



const tom = new User("Tom");
const task = new Task("Code the world ");

let hashChange: any = require('hash-change');

hashChange.on('change', function (hash) {
  console.log('hash is', hash)
});


$('body').css({'background': '#33aacc'});


tom.work(task);
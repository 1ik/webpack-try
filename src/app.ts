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


require(['./assets/data.json', './assets/user.json'], (data,user) => {
    console.log('loaded async ', data, user); 
});


tom.work(task);
tom.work(new Task('Code the Universe'));

console.log("end of the file");
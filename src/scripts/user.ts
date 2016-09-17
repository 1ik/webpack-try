import {Task} from './task';

export class User {
	public name: string;
	
	constructor(name: string) {
		this.name = name;
	}

	public work(task: Task): void {
		console.log('i am working on' + task.name);
	}
}
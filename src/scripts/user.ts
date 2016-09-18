import {Task} from './task';
import {SaveTheWorld} from './utils.ts';

export class User {
	public name: string;
	
	constructor(name: string) {
		this.name = name;
	}

	@SaveTheWorld
	public work(task: Task): void {
		console.log('i am working on' + task.name);
	}
}

import {Task} from './task.ts';

export function SaveTheWorld(target: Object, functionName: string, descriptor: any) {
	let originalMethod: any = descriptor.value;

	descriptor.value = (...args: any[]) => { // we don't know how many and what type of args are passed.
		
		if (args[0] instanceof Task && args[0].name.indexOf('world') != -1) {
			console.log(" I am saving the world. won't let it execute !! B)");
			return;
		}

		originalMethod.apply(this, args);	
	};

	return descriptor;
}
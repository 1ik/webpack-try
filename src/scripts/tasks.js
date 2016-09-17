var tasks = [
	{
		name: "This is a task",
		execute: function() {
			console.log('executing ' + this.name);
		}
	}
];


module.exports.tasks = tasks;
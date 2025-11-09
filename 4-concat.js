//Get user arguments (excluding "node" and script name)
const args = process.argv.slice(2);

//Print the sentence "arg1 is arg2"
console.log(args[0] + " is " + args[1]);
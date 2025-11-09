//Get the user arguments (excluding "node" and script name)
const args = process.argv.slice(2);

//check if the first argument exists
if (args[0] === undefined) {
    console.log("No argument");
}
else {
    console.log(args[0]);
}
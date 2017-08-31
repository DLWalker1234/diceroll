// This parse-args file should export a single function to parse your command line arguments.
//  The function should accept
//  an array containing the arguments passed on the command line. Convert these arguments 
// to an object with a count and sides property.

console.log('parse');
parsArgs = () => {
    let array = process.argv;
    if (array === 3) {
        let sides = array[1];
        let count = array[2];
        return sides, count;
    } else {
        let sides = array[1];
        let count = 1;
        return sides, count;
    }
};



module.exports = { parsArgs };
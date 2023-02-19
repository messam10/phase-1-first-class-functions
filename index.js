function receivesAFunction(callback) {
    return callback();
}
function returnsANamedFunction() {
    return (
        function fn() {
            return "fn";
        }
    );
}
function returnsAnAnonymousFunction() {
    return () => "fn";
}

console.log(receivesAFunction(returnsAnAnonymousFunction()));
console.log(returnsANamedFunction()());
console.log(returnsAnAnonymousFunction()());
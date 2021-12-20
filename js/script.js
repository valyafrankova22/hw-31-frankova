function flatFunc(array) {
    const newArr = [];

    if (arguments.length > 1) throw new Error(`Function accepts only 1 argument, too much arguments provided`);

    (function flat(array) {
        array.forEach(function(el) {
            if (Array.isArray(el)) flat(el);
            else newArr.push(el);
        });
    })(array);
    return newArr;
}

console.log(flatFunc([1,2,3,[1,2,3,4, [2,3,4]]]));

console.log(flatFunc([1,2,3,[1,2,3,4, [2,3,4]]], `arg2`));
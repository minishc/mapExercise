/*
    Input should be a list of maps which have String values
    will output a map with the value being an object
    which is an array of Strings mapped to the key from the array
    of maps with no duplicates
*/
function mergeIntoObjectOfArrays(input) {

    let result = {};
    for(const map in input) {

        for (const key in input[map]) {
            let add = true;
            if(!(key in result)) {
                result[key] = [];
                result[key][0] = input[map][key];
            }

            else {
                if(result[key].includes(input[map][key])) {
                    add = false;
                }

                if(add) {
                    result[key].push(input[map][key]);
                }
            }
        }
    }

    return result;
}

var syncTest1 = {
    Rei:"Eva-00",
    Shinji:"Eva-01"
};

var syncTest2 = {
    Asuka:"Eva-02",
    Shinji:"Eva-01",
    Rei:"Eva-00"
};

var syncTest3 = {
    Shinji:"Eva-00",
    Rei:"Eva-01",
    Asuka:"Eva-02"
};

var list = {syncTest1, syncTest2, syncTest3};

console.log(mergeIntoObjectOfArrays(list));
var fs = require('fs');
var stud = [];
var bsd = [];
module.exports.init = function () {
    return new Promise(function (resolve, reject) {
        fs.readFile('./test2/students.json', (err, data) => {
            if (err) { reject("unable to read file"); }
            else {
                stud = JSON.parse(data);
                resolve(stud);
            }
        })

    })

}
module.exports.getBSD = function () {
    return new Promise(function (resolve, reject) {
        if (bsd.length > 0) { resolve(bsd); }
        else { reject("no results returned"); };
    })
}


/// <reference path="typings/tsd.d.ts" />
var through = require("through2");
var path = require("path");

module.exports = (myArg1 = "undefined",myArg2 = true) => {

    return through.obj((file, enc, cb) => {

        //run callback function to signal end of plugin process.
        return cb(null, file);
    });
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const CsvFileReader_js_1 = require("./CsvFileReader.js");
const utils_js_1 = require("./utils.js");
class MatchReader extends CsvFileReader_js_1.CsvFileReader {
    mapRow(row) {
        return [
            (0, utils_js_1.dateStringToDate)(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5],
            row[6]
        ];
    }
}
exports.MatchReader = MatchReader;

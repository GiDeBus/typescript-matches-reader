"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvClassReader = void 0;
const fs_1 = __importDefault(require("fs"));
class CsvClassReader {
    constructor(filename) {
        this.data = [];
        this.filename = filename;
    }
    read() {
        this.data = fs_1.default.readFileSync(this.filename, { encoding: 'utf-8' }).split('\n').map((row) => {
            return row.split(',');
        });
    }
}
exports.CsvClassReader = CsvClassReader;

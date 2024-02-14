"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
describe('Testing hello world', () => {
    it('Should return "Hello World"', () => {
        expect((0, index_1.myFunction)()).toEqual('Hello World');
    });
});

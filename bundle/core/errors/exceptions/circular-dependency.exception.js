"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const runtime_exception_1 = require("./runtime.exception");
class CircularDependencyException extends runtime_exception_1.RuntimeException {
    constructor(context) {
        super(`A circular dependency has been detected inside ${context}. Please, make sure that each side of a bidirectional relationships are decorated with "forwardRef()".`);
    }
}
exports.CircularDependencyException = CircularDependencyException;

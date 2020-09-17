"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestBug = void 0;
/**
 * @beta
 */
var TestBug = /** @class */ (function () {
    function TestBug() {
    }
    Object.defineProperty(TestBug.prototype, "foo", {
        set: function (x) {
            this.x = x;
        },
        enumerable: false,
        configurable: true
    });
    return TestBug;
}());
exports.TestBug = TestBug;

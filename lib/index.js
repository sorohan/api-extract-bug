"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        enumerable: true,
        configurable: true
    });
    return TestBug;
}());
exports.TestBug = TestBug;

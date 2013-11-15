var test = require("tape");

var gerad = require("../index.js");

test("gerad is a function", function (assert) {
    assert.equal(typeof gerad, "function");
    assert.end();
})

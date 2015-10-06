//// [tests/cases/compiler/jsFileCompilationEmitTrippleSlashReference.ts] ////

//// [a.ts]
class c {
}

//// [b.js]
/// <reference path="c.js"/>
function foo() {
}

//// [c.js]
function bar() {
}

//// [out.js]
var c = (function () {
    function c() {
    }
    return c;
})();


//// [out.d.ts]
declare class c {
}
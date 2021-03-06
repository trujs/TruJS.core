/**[@test({ "title": "isElement: test one element and one non-element", "format": "browser" })]*/
function testTruJS12(arrange, act, assert, document, trujs) {
    //shared variables
    var el, nonel, isel1, isel2;

    arrange(function () {
        el = document.createElement('div');
        nonel = { 'element': 'div' };
        isel1 = null;
        isel2 = null;
    });

    act(function () {
        isel1 = trujs.isElement(el);
        isel2 = trujs.isElement(nonel);
    });

    assert(function (test) {
        test('The el variable is an element').value(isel1).isTrue();
        test('The nonel variable is not an element').value(isel2).isFalse();
    });
}
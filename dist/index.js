var isHtmlElement = function (element) {
    return element instanceof HTMLElement;
};

var AlteredPropValues;
(function (AlteredPropValues) {
    AlteredPropValues["ClassName"] = "className";
})(AlteredPropValues || (AlteredPropValues = {}));
var JsxFactory = /** @class */ (function () {
    function JsxFactory() {
    }
    JsxFactory.parse = function (tag, props) {
        var children = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            children[_i - 2] = arguments[_i];
        }
        var element = document.createElement('header');
        if (typeof tag === 'function') {
            element = tag(props);
        }
        if (typeof tag === 'string') {
            element = document.createElement(tag);
        }
        children.forEach(function (child) {
            if (isHtmlElement(child)) {
                element.append(child);
            }
            if (typeof child === 'number') {
                element.append(document.createTextNode(child.toString(10)));
            }
            if (typeof child === 'string') {
                element.append(document.createTextNode(child));
            }
        });
        if (props) {
            for (var _a = 0, _b = Object.entries(props); _a < _b.length; _a++) {
                var _c = _b[_a], key = _c[0], value = _c[1];
                if (key === AlteredPropValues.ClassName) {
                    var classNames = value.split(' ');
                    classNames.forEach(function (className) { return element.classList.add(className); });
                    continue;
                }
                element.setAttribute(key, value);
            }
        }
        return element;
    };
    return JsxFactory;
}());

var Index = function () {
    return (JsxFactory.parse("main", null, "dev-home"));
};
document.body.append(Index());

export default Index;

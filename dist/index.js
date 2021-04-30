var isHtmlElement = function (element) {
    return element instanceof HTMLElement;
};

var AlteredPropValues;
(function (AlteredPropValues) {
    AlteredPropValues["ClassName"] = "className";
})(AlteredPropValues || (AlteredPropValues = {}));
var EventListenerProps;
(function (EventListenerProps) {
    EventListenerProps["OnClick"] = "onClick";
})(EventListenerProps || (EventListenerProps = {}));
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
            var _loop_1 = function (key, value) {
                if (key === AlteredPropValues.ClassName) {
                    if (value !== 'string') {
                        return "continue";
                    }
                    var classNames = value.split(' ');
                    classNames.forEach(function (className) { return element.classList.add(className); });
                    return "continue";
                }
                if (key === EventListenerProps.OnClick) {
                    if (typeof value !== 'function') {
                        return "continue";
                    }
                    element.addEventListener('click', function () { return value(); });
                    return "continue";
                }
                element.setAttribute(key, value);
            };
            for (var _a = 0, _b = Object.entries(props); _a < _b.length; _a++) {
                var _c = _b[_a], key = _c[0], value = _c[1];
                _loop_1(key, value);
            }
        }
        return element;
    };
    return JsxFactory;
}());

var Themes;
(function (Themes) {
    Themes["Light"] = "lightTheme";
    Themes["Dark"] = "darkTheme";
})(Themes || (Themes = {}));
var initTheme = function () {
    var currentTheme = localStorage.getItem('theme');
    if (!currentTheme) {
        document.body.classList.add(Themes.Light);
        localStorage.setItem('theme', Themes.Light);
        return;
    }
    document.body.classList.add(currentTheme);
};
var switchTheme = function () {
    var currentTheme = localStorage.getItem('theme');
    if (currentTheme === Themes.Light) {
        document.body.classList.replace(Themes.Light, Themes.Dark);
        localStorage.setItem('theme', Themes.Dark);
    }
    if (currentTheme === Themes.Dark) {
        document.body.classList.replace(Themes.Dark, Themes.Light);
        localStorage.setItem('theme', Themes.Light);
    }
};
var ThemeSwitcher = function () {
    initTheme();
    return (JsxFactory.parse("button", { onClick: switchTheme }, "Switch Theme"));
};

var Index = function () {
    return (JsxFactory.parse("main", null,
        "bmcarmody/dev-home",
        JsxFactory.parse(ThemeSwitcher, null)));
};
document.body.append(Index());

export default Index;

"use strict";

var _textlintRulePrh = _interopRequireDefault(require("textlint-rule-prh"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = function (context) {
  return _textlintRulePrh["default"].fixer(context, {
    rulePaths: [_path["default"].join(__dirname, "..", "rule", "prh.yml")]
  });
};
//# sourceMappingURL=index.js.map
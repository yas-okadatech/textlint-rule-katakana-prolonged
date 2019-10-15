import prh from "textlint-rule-prh";
import path from "path";
module.exports = function(context) {
    return prh.fixer(context, {
        rulePaths: [path.join(__dirname, "..", "rule", "prh.yml")]
    });
};

"use strict";
import TextLintTester from "textlint-tester";
import rule from "../src/index";
var tester = new TextLintTester();
tester.run("brand names", rule, {
    valid: [
        'よく分かるコンテナ入門',
    ],
    invalid: [
        {
            text: "よく分かるコンテナー入門",
            errors: [
                {
                    message: "コンテナー => コンテナ"
                }
            ]
        },
    ]
});

const babelConfiguration = {
    "presets": [
        [
            "@babel/preset-env",
            {
                "targets": {
                    "browsers": [
                        "last 2 versions",
                        "safari >= 7"
                    ],
                }
            }
        ]
    ],
    "plugins": [
        "transform-inline-environment-variables",
        "@babel/plugin-transform-react-jsx",
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-proposal-class-properties",
        [
            "@babel/plugin-transform-runtime",
            {
                "corejs": false,
                "regenerator": true,
                "useESModules": false
            }
        ]
    ]
}

module.exports = babelConfiguration;
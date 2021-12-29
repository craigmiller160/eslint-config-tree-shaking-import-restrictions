const restrictedImports = {
    paths: [
        {
            name: '@material-ui/core',
            message: 'Please use more detailed import: "@material-ui/core/ITEM"'
        },
        {
            name: '@material-ui/icons',
            message: 'Please use more detailed import: "@material-ui/icons/ITEM"'
        },
        {
            name: '@material-ui/lab',
            message: 'Please use more detailed import: "@material-ui/lab/ITEM"'
        },
        {
            name: 'date-fns',
            message: 'Please use more detailed import: "date-fns/ITEM/index"'
        },
        {
            name: 'date-fns-tz',
            message: 'Please use more detailed import: "date-fns-tz/esm/ITEM"'
        },
        {
            name: 'moment',
            message: 'MomentJS is a heavy library. Please use date-fns instead'
        }
    ],
    patterns: [
        'fp-ts/lib/*'
    ]
};

module.exports = {
    rules: {
        'no-restricted-imports': [
            'error',
            restrictedImports
        ]
    }
};

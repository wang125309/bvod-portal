var require = {
    baseUrl: "/static",
    paths: {
        'underscore': 'components/underscore/underscore.js',
        'jquery': 'components/jquery/dist/jquery.min',
        'bootstrap': 'components/bootstrap/dist/js/bootstrap.min',
        'multiline': 'components/multiline/browser',
        'backbone': 'components/backbone',
        'headroom': 'components/headroom.js/dist/headroom'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery']
        },
        'backbone': {
            deps: ['jquery']
        }
    }
};
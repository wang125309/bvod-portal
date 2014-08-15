var require = {
    baseUrl: "/portal_static",
    paths: {
        'underscore': 'components/underscore/underscore.js',
        'jquery': 'components/jquery/dist/jquery.min',
        'bootstrap': 'components/bootstrap/dist/js/bootstrap',
        'multiline': 'components/multiline/browser',
        'backbone': 'components/backbone',
        'headroom': 'components/headroom.js/dist/headroom',
        'velocity': 'components/velocity/jquery.velocity.min',
        'jwplayer': 'js/3R6NXBWDEeS7ByIAC0MJiQ',
        'jrumble': 'js/jquery.jrumble.1.3.min'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery']
        },
        'backbone': {
            deps: ['jquery']
        },
        'velocity': {
            deps: ['jquery']
        },
        'jrumble': {
            deps: ['jquery']
        }
    }
};

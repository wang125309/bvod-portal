module.exports = {
    baseUrl: "./assets",
    paths: {
        'underscore': 'components/underscore/underscore',
        'jquery': 'components/jquery/dist/jquery',
        'bootstrap': 'components/bootstrap/dist/js/bootstrap',
        'multiline': 'components/multiline/browser',
        'backbone': 'components/backbone',
        'headroom': 'components/headroom.js/dist/headroom',
        'velocity': 'components/velocity/jquery.velocity',
        'jwplayer': 'js/3R6NXBWDEeS7ByIAC0MJiQ',
        'jrumble': 'js/jquery.jrumble.1.3.min',
        'dropdown': 'components/bootstrap/js/dropdown',
        'collapse':'components/bootstrap/js/collapse',
        'affix':'components/bootstrap/js/affix',
        'sticky': 'components/jquery.stickyFooter/src/jquery.stickyFooter',

        //app modules
        'index': 'jss/index',
        'videos': 'jss/videos',
        'video-detail': 'jss/video-detail',
        'org-list': 'jss/org-list',
        'org-grid': 'jss/org-grid',
        'org-detail': 'jss/org-detail',
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
        },
        'sticky': {
            deps: ['jquery']
        },
        'dropdown': {
            deps: ['jquery']
        },
        'collapse': {
            deps: ['jquery']
        },
        'affix': {
            deps: ['jquery']
        },
    }
};

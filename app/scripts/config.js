/**
 * Created by ww on 2015/4/11.
 */
angular.module('app.config')
.config([
        'localStorageServiceProvider',
        '$stateProvider',
        '$urlRouterProvider',
        '$ionicConfigProvider',
        'RestangularProvider',
        config
]);
function config(localStorageServiceProvider,$stateProvider, $urlRouterProvider,$ionicConfigProvider,RestangularProvider) {
    $ionicConfigProvider.views.transition('platform');
    localStorageServiceProvider.setPrefix('eeu');
    RestangularProvider.setBaseUrl("http://eeu.waysapp.com/api/index.php");
    //导航栏置底
    $urlRouterProvider.otherwise('/menu/index');
    $stateProvider
    .state('menu', {
        url: "/menu",
        abstract: true,
        templateUrl: "modules/menu.html",
        controller:'menu'
    })
    .state('menu.index', {
        url: '/index',
        views: {
            'menuContent': {
                templateUrl: 'modules/index/index.html',
                controller:'index'
            }
        }
    })
    .state('menu.info', {
        url: '/info',
        views: {
            'menuContent': {
                templateUrl: 'modules/info/info.html',
                controller:'info'
            }
        }
    })
    .state('menu.signUp', {
        url: '/signUp',
        views: {
            'menuContent': {
                templateUrl: 'modules/signUp/signUp.html',
                controller:'signUp'
            }
        }
    })
    //.state('menu.signIn', {
    //    url: '/signIn',
    //    views: {
    //        'menuContent': {
    //            templateUrl: 'modules/signIn/signIn.html',
    //            controller:'signIn'
    //        }
    //    }
    //})
    .state('signIn', {
        url: '/signIn',
        templateUrl: 'modules/signIn/signIn.html',
        controller:'signIn'
    })
    .state('menu.about', {
        url: '/about',
        views: {
            'menuContent': {
                templateUrl: 'modules/about/about.html'
            }
        }
    })
    .state('menu.contact', {
        url: '/contact',
        views: {
            'menuContent': {
                templateUrl: 'modules/contact/contact.html'
            }
        }
    })
    .state('menu.course', {
        url: '/course',
        params:{
            type:"all"
        },
        views: {
            'menuContent': {
                templateUrl: 'modules/course/course.html',
                controller:'course'
            }
        }
    })
    .state('menu.courseDetail', {
        url: '/courseDetail',
        params:{
            id:119
        },
        views: {
            'menuContent': {
                templateUrl: 'modules/course/courseDetail/courseDetail.html',
                controller:'courseDetail'
            }
        }
    })
    .state('menu.event', {
        url: '/event',
        views: {
            'menuContent': {
                templateUrl: 'modules/event/event.html',
                controller:'event'
            }
        }
    })
    .state('menu.news', {
        url: '/news',
        views: {
            'menuContent': {
                templateUrl: 'modules/news/news.html',
                controller:'news'
            }
        }
    })
    .state('menu.newsDetail', {
        url: '/newsDetail',
        params:{
            id:1
        },
        views: {
            'menuContent': {
                templateUrl: 'modules/news/newsDetail/newsDetail.html',
                controller:'newsDetail'
            }
        }
    })
    .state('menu.shop', {
        url: '/shop',
        views: {
            'menuContent': {
                templateUrl: 'modules/shop/shop.html'
            }
        }
    })
    ;
};

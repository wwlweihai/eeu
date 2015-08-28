function config(a,b,c,d,e){d.views.transition("platform"),a.setPrefix("eeu"),e.setBaseUrl("http://eeu.waysapp.com/api/index.php"),c.otherwise("/menu/index"),b.state("menu",{url:"/menu","abstract":!0,templateUrl:"modules/menu.html",controller:"menu"}).state("menu.index",{url:"/index",views:{menuContent:{templateUrl:"modules/index/index.html",controller:"index"}}}).state("menu.info",{url:"/info",views:{menuContent:{templateUrl:"modules/info/info.html",controller:"info"}}}).state("menu.signUp",{url:"/signUp",views:{menuContent:{templateUrl:"modules/signUp/signUp.html",controller:"signUp"}}}).state("signIn",{url:"/signIn",templateUrl:"modules/signIn/signIn.html",controller:"signIn"}).state("menu.about",{url:"/about",views:{menuContent:{templateUrl:"modules/about/about.html"}}}).state("menu.contact",{url:"/contact",views:{menuContent:{templateUrl:"modules/contact/contact.html"}}}).state("menu.course",{url:"/course",params:{type:"all"},views:{menuContent:{templateUrl:"modules/course/course.html",controller:"course"}}}).state("menu.courseDetail",{url:"/courseDetail",params:{id:119},views:{menuContent:{templateUrl:"modules/course/courseDetail/courseDetail.html",controller:"courseDetail"}}}).state("menu.event",{url:"/event",views:{menuContent:{templateUrl:"modules/event/event.html",controller:"event"}}}).state("menu.news",{url:"/news",views:{menuContent:{templateUrl:"modules/news/news.html",controller:"news"}}}).state("menu.newsDetail",{url:"/newsDetail",params:{id:1},views:{menuContent:{templateUrl:"modules/news/newsDetail/newsDetail.html",controller:"newsDetail"}}}).state("menu.shop",{url:"/shop",views:{menuContent:{templateUrl:"modules/shop/shop.html"}}})}function menu(a,b,c,d,e,f,g){function h(){d.globals=c.get("globals")||{},d.globals.currentUser?g.isLogin=!0:g.isLogin=!1}function i(){c.remove("globals"),f.clearCache(),g.isLogin=!1,alert("登出成功")}h(),g.signOut=i,d.$on("userLogin",function(a,b){console.log("userLogin on "+b),h()}),a.registerBackButtonAction(function(){var a=b.confirm({title:"退出程序",template:"確認要退出？",cancelText:"取消",okText:"確認"});a.then(function(a){a&&ionic.Platform.exitApp()})},100)}function index(a,b,c){var d=b.one(""),e={task:"get_banner"};d.get(e).then(function(b){c.bannerList=b.data,console.log(b.data),a.update()});var f=b.one(""),g={task:"get_news"};f.get(g).then(function(a){console.log(a.data),c.newsList=a.data})}function course(a,b,c,d){function e(a){if(d.data.isApplying=!0,console.log(a),b.globals.currentUser){var c=new FormData;c.append("id",a),c.append("userid",b.globals.currentUser.id),f.customPOST(c,void 0,g,{"Content-Type":void 0}).then(function(a){1===a.succeed?alert("報名成功"):(console.log(a.errormsg),alert("報名失敗")),d.data.isApplying=!1})}else alert("請登錄")}console.log(a.type);var f=c.one("").withHttpConfig({transformRequest:angular.identity}),g={task:"apply_lesson"};if(d.apply=e,d.data={},d.data.isApplying=!1,b.globals.currentUser&&console.log(b.globals.currentUser.id),"all"===a.type){var h=c.one("").withHttpConfig({transformRequest:angular.identity}),i={task:"get_lesson"},j=new FormData;b.globals.currentUser&&j.append("userid",b.globals.currentUser.id),h.customPOST(j,void 0,i,{"Content-Type":void 0}).then(function(a){d.courseList=a.data})}if("apply"===a.type){var h=c.one("").withHttpConfig({transformRequest:angular.identity}),i={task:"get_apply_lesson"},j=new FormData;j.append("userid",b.globals.currentUser.id),h.customPOST(j,void 0,i,{"Content-Type":void 0}).then(function(a){d.courseList=a.data})}}function signUp(a,b,c){function d(){if(console.log(c.form),c.form.pwd==c.form.pwds){var a=new FormData;a.append("tel",c.form.tel),a.append("password",c.form.pwd),e.customPOST(a,void 0,f,{"Content-Type":void 0}).then(function(a){1===a.succeed?(alert("註冊成功"),c.form.tel="",c.form.pwd="",c.form.pwds="",b.go("signIn")):alert(a.errormsg)})}else c.form.pwd="",c.form.pwds="",alert("密码不统一")}var e=a.one("").withHttpConfig({transformRequest:angular.identity}),f={task:"registration"};c.form={},c.signUp=d}function signIn(a,b,c,d,e,f){function g(){var c=new FormData;c.append("tel",f.form.tel),c.append("password",f.form.pwd),h.customPOST(c,void 0,i,{"Content-Type":void 0}).then(function(c){console.log(c),c&&(1===c.succeed?(alert("登錄成功"),e.clearCache(),a.globals={currentUser:{id:c.data.id,name:c.data.name,tel:c.data.tel,email:c.data.email}},b.set("globals",a.globals),f.form.tel="",f.form.pwd="",d.go("menu.index"),a.$broadcast("userLogin","userLogin")):(f.form.pwd="",alert(c.errormsg)))})}var h=c.one("").withHttpConfig({transformRequest:angular.identity}),i={task:"login"};f.form={},f.signIn=g}function info(a,b,c,d,e){if(a.globals=c.get("globals")||{},console.log("currentUser"+a.globals.currentUser.id),a.globals.currentUser){var f=d.one("").withHttpConfig({transformRequest:angular.identity}),g={task:"get_user_info"},h=new FormData;h.append("id",a.globals.currentUser.id),f.customPOST(h,void 0,g,{"Content-Type":void 0}).then(function(a){console.log("info -- "+JSON.stringify(a)),1===a.succeed?e.user=a.data:alert("獲取信息失敗")})}else b.go("menu.signIn")}function event(a,b,c){c.data={},console.log(b.id);var d=a.one("").withHttpConfig({transformRequest:angular.identity}),e={task:"get_photo_gallery"};new FormData;d.customPOST(null,void 0,e,{"Content-Type":void 0}).then(function(a){console.log(a.data),c.data.photoList=a.data})}function news(a,b,c){c.data={},console.log(b.id);var d=a.one("").withHttpConfig({transformRequest:angular.identity}),e={task:"get_news"};new FormData;d.customPOST(null,void 0,e,{"Content-Type":void 0}).then(function(a){console.log(a.data),c.data.newsList=a.data})}function newsDetail(a,b,c){c.data={},console.log(b.id);var d=a.one("").withHttpConfig({transformRequest:angular.identity}),e={task:"get_news"},f=new FormData;f.append("id",b.id),d.customPOST(f,void 0,e,{"Content-Type":void 0}).then(function(a){console.log(a.data),c.data.newsDetail=a.data[0]})}function courseDetail(a,b,c){c.data={},console.log(b.id);var d=a.one("").withHttpConfig({transformRequest:angular.identity}),e={task:"get_lesson"},f=new FormData;f.append("id",b.id),d.customPOST(f,void 0,e,{"Content-Type":void 0}).then(function(a){console.log(a.data),c.data.courseDetail=a.data[0]})}angular.module("app",["app.core","app.value","app.config","app.filter","app.directive","app.controller"]),angular.module("app.core",["LocalStorageModule","restangular"]),angular.module("app.value",[]),angular.module("app.filter",[]),angular.module("app.config",["ionic","app.value"]),angular.module("app.controller",[]),angular.module("app.directive",[]),angular.module("app.config").config(["localStorageServiceProvider","$stateProvider","$urlRouterProvider","$ionicConfigProvider","RestangularProvider",config]),angular.module("app.controller").controller("menu",menu),menu.$inject=["$ionicPlatform","$ionicPopup","localStorageService","$rootScope","$state","$ionicHistory","$scope"],angular.module("app.controller").controller("index",index),index.$inject=["$ionicSlideBoxDelegate","Restangular","$scope"],angular.module("app.controller").controller("course",course),course.$inject=["$stateParams","$rootScope","Restangular","$scope"],angular.module("app.controller").controller("signUp",signUp),signUp.$inject=["Restangular","$state","$scope"],angular.module("app.controller").controller("signIn",signIn),signIn.$inject=["$rootScope","localStorageService","Restangular","$state","$ionicHistory","$scope"],angular.module("app.controller").controller("info",info),info.$inject=["$rootScope","$state","localStorageService","Restangular","$scope"],angular.module("app.controller").controller("event",event),event.$inject=["Restangular","$stateParams","$scope"],angular.module("app.controller").controller("news",news),news.$inject=["Restangular","$stateParams","$scope"],angular.module("app.controller").controller("newsDetail",newsDetail),newsDetail.$inject=["Restangular","$stateParams","$scope"],angular.module("app.controller").controller("courseDetail",courseDetail),courseDetail.$inject=["Restangular","$stateParams","$scope"],angular.module("app.filter").filter("courseStatus",function(){return function(a){a=a||"";var b="";return 0==a&&(b="審核中.."),1==a&&(b="報名成功"),b}}),angular.module("app.filter").filter("menberGroup",function(){return function(a){a=a||"";var b="";return 2==a&&(b="註冊會員"),3==a&&(b="付費會員"),b}});
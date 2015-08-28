angular.module('app.controller')
.controller('course',course);

course.$inject = [
    '$stateParams',
    '$rootScope',
    'Restangular',
    '$scope'
];
function course($stateParams,$rootScope,Restangular,$scope) {
    console.log($stateParams.type);
    var courseApplyReq = Restangular.one("").withHttpConfig({transformRequest: angular.identity});
    var courseApplyParams = {task:"apply_lesson"};
    $scope.apply = apply;
    $scope.data = {};
    $scope.data.isApplying = false;
    if($rootScope.globals.currentUser){
        console.log($rootScope.globals.currentUser.id);
    }
    if($stateParams.type === "all" ){
        var courseReq = Restangular.one("").withHttpConfig({transformRequest: angular.identity});
        var courseReqParams = {task:"get_lesson"}
        var formData = new FormData();
        if($rootScope.globals.currentUser){
            formData.append('userid', $rootScope.globals.currentUser.id);
        }
        courseReq.customPOST(
            formData,
            undefined, // put your path here
            courseReqParams, // params here, e.g. {format: "json"}
            {'Content-Type': undefined}
        ).then(function(result){
                $scope.courseList = result.data;
            });
    }
    if($stateParams.type === "apply"){
        var courseReq = Restangular.one("").withHttpConfig({transformRequest: angular.identity});
        var courseReqParams = {task:"get_apply_lesson"}
        var formData = new FormData();
        formData.append('userid', $rootScope.globals.currentUser.id);
        courseReq.customPOST(
            formData,
            undefined, // put your path here
            courseReqParams, // params here, e.g. {format: "json"}
            {'Content-Type': undefined}
        ).then(function(result){
                $scope.courseList = result.data;
        });
    }
    function apply(courseId){
        $scope.data.isApplying = true;
        console.log(courseId);
        if($rootScope.globals.currentUser){
            var formData = new FormData();
            formData.append('id', courseId);
            formData.append('userid', $rootScope.globals.currentUser.id);
            courseApplyReq.customPOST(
                formData,
                undefined, // put your path here
                courseApplyParams, // params here, e.g. {format: "json"}
                {'Content-Type': undefined}
            ).then(function(result){
                    if(result.succeed === 1){
                        alert("報名成功");
                    }else{
                        console.log(result.errormsg);
                        alert("報名失敗");
                    }
                    $scope.data.isApplying = false;
            });
        }else{
            alert("請登錄");
        };
    }
}



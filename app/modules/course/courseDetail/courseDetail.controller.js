angular.module('app.controller')
.controller('courseDetail',courseDetail);

courseDetail.$inject = [
    'Restangular',
    '$stateParams',
    '$scope'
];
function courseDetail(Restangular,$stateParams,$scope) {
    $scope.data = {};
    console.log($stateParams.id);
    var courseDetailReq = Restangular.one("").withHttpConfig({transformRequest: angular.identity});
    var courseReqParams = {task:"get_lesson"};
    var formData = new FormData();
    formData.append('id', $stateParams.id);
    courseDetailReq.customPOST(
        formData,
        undefined, // put your path here
        courseReqParams, // params here, e.g. {format: "json"}
        {'Content-Type': undefined}
    ).then(function(result){
            console.log(result.data);
            $scope.data.courseDetail = result.data[0];
        });
}



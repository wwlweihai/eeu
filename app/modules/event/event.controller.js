angular.module('app.controller')
.controller('event',event);

event.$inject = [
    'Restangular',
    '$stateParams',
    '$scope'
];
function event(Restangular,$stateParams,$scope) {
    $scope.data = {};
    console.log($stateParams.id);
    var eventReq = Restangular.one("").withHttpConfig({transformRequest: angular.identity});
    var eventReqParams = {task:"get_photo_gallery"};
    var formData = new FormData();
    eventReq.customPOST(
        null,
        undefined, // put your path here
        eventReqParams, // params here, e.g. {format: "json"}
        {'Content-Type': undefined}
    ).then(function(result){
            console.log(result.data);
            $scope.data.photoList = result.data;
    });
}



angular.module('app.controller')
.controller('signUp',signUp);

signUp.$inject = [
    'Restangular',
    '$state',
    '$scope'
];
function signUp(Restangular,$state,$scope) {
    var signUpReq = Restangular.one("").withHttpConfig({transformRequest: angular.identity});
    var signUpReqParams = {task:"registration"};
    $scope.form = {};
    $scope.signUp = signUp;
    function signUp(){
        console.log($scope.form);
        if($scope.form.pwd == $scope.form.pwds) {
            var formData = new FormData();
            formData.append('tel', $scope.form.tel);
            formData.append('password', $scope.form.pwd);

            signUpReq.customPOST(
                formData,
                undefined, // put your path here
                signUpReqParams, // params here, e.g. {format: "json"}
                {'Content-Type': undefined}
            ).then(function(result){
                if(result.succeed === 1){
                    alert("註冊成功");
                    $scope.form.tel = "";
                    $scope.form.pwd = "";
                    $scope.form.pwds = "";
                    $state.go("signIn");
                }else{
                    alert(result.errormsg);
                }
            });
        }else{
            $scope.form.pwd = "";
            $scope.form.pwds = "";
            alert("密码不统一");
        }
    }
}



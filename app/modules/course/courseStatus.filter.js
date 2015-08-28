angular.module('app.filter')
.filter("courseStatus", function() {
    return function(input) {
        input = input || '';
        var out = "";

        if(input == 0) out = "審核中..";
        if(input == 1) out = "報名成功";
        return out;
    };
});

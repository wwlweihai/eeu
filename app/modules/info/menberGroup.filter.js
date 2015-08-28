angular.module('app.filter')
.filter("menberGroup", function() {
    return function(input) {
        input = input || '';
        var out = "";

        if(input == 2) out = "註冊會員";
        if(input == 3) out = "付費會員";
        return out;
    };
});

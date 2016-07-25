app.factory("finacialSrv",function($http) {
    var baseService ='http://localhost:4284/api/App' 
    return{
        getPositions : function () {
            return $http.get(baseService+'/GetPositions');
        }
    }
})
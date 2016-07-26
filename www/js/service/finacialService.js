app.factory("finacialSrv", function ($http) {
    var baseService = 'http://localhost:4284/api/App';
    var infor = angular.fromJson(window.localStorage['infor'] || '[]');
    function persist() {
        window.localStorage['infor'] = angular.toJson(infor);
    }

    return {
        getPositions: function () {
            return $http.get(baseService + '/GetPositions');
        },
        getListSchools: function () {
            return $http.get(baseService + '/GetSchoolList');
        },
        getListProvinces: function () {
            return $http.get(baseService + '/GetProvinceList');
        },
        getDistrict: function (provinceId) {
            return $http.get(baseService + '/GetDistrictByProvince?provinceId=' + provinceId);
        }
    }
})
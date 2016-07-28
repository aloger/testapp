app.factory("finacialSrv", function ($http) {
    $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    var baseService = 'http://localhost:4284/api/App';
    var stepone = angular.fromJson(window.localStorage['stepone'] || '[]');
    function stepOnePersist() {
        window.localStorage['stepone'] = angular.toJson(stepone);
    }
    var stepdtwo = angular.fromJson(window.localStorage['stepdtwo'] || '[]');
    function stepTwoPersist() {
        window.localStorage['stepone'] = angular.toJson(stepdtwo);
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
        },
        getStepOne: function () {
            return stepone;
        },
        saveStepOne: function (stepOneData) {
            stepone.push(stepOneData);
            stepOnePersist();
        },
        clearDataStepOne: function () {
            if (stepone != null && stepone != undefined && stepone.length != 0) {
                stepone.splice(0, 1);
                stepOnePersist();
            }
        },
        getStepTwo: function () {
            return stepdtwo;
        },
        saveStepTwo: function (stepTwoData) {
            stepdtwo.push(stepTwoData);
            stepTwoPersist();
        },
        clearDataStepTwo: function () {
            if (stepdtwo != null && stepdtwo != undefined && stepdtwo.length != 0) {
                stepdtwo.splice(0, 1);
                stepTwoPersist();
            }
        },
        save: function (data) {
            // return $http.post(baseService + '/Register/',
            //     { data: obj });
            return $http({
                method: 'POST',
                url: baseService + '/Register/',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                data: data,
            }).success(function () { });
        }
    }
})
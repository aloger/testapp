app.factory("finacialSrv", function ($http) {
    $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    /**
   * The workhorse; converts an object to x-www-form-urlencoded serialization.
   * @param {Object} obj
   * @return {String}
   */
    var param = function (obj) {
        var query = '', name, value, fullSubName, subName, subValue, innerObj, i;

        for (name in obj) {
            value = obj[name];

            if (value instanceof Array) {
                for (i = 0; i < value.length; ++i) {
                    subValue = value[i];
                    fullSubName = name + '[' + i + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += param(innerObj) + '&';
                }
            }
            else if (value instanceof Object) {
                for (subName in value) {
                    subValue = value[subName];
                    fullSubName = name + '[' + subName + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += param(innerObj) + '&';
                }
            }
            else if (value !== undefined && value !== null)
                query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
        }

        return query.length ? query.substr(0, query.length - 1) : query;
    };

    // Override $http service's default transformRequest
    $http.defaults.transformRequest = [function (data) {
        return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
    }];
    var baseService = 'http://devsale.thessc.com.vn/api/App';
    var stepone = angular.fromJson(window.localStorage['stepone'] || '[]');
    function stepOnePersist() {
        window.localStorage['stepone'] = angular.toJson(stepone);
    }
    var steptwo = angular.fromJson(window.localStorage['steptwo'] || '[]');
    function stepTwoPersist() {
        window.localStorage['steptwo'] = angular.toJson(steptwo);
    }
    return {
        getPositions: function () {
            return $http.get(baseService + '/GetPositions');
        },
        getListSchools: function () {
            return $http.get(baseService + '/GetSchoolList');
        },
        getSchoolName: function (schoolId) {
            return $http.get(baseService + '/GetSchoolName?schoolId=' + schoolId);
        },
        getListProvinces: function () {
            return $http.get(baseService + '/GetProvinceList');
        },
        getDistrict: function (provinceId) {
            return $http.get(baseService + '/GetDistrictByProvince?provinceId=' + provinceId);
        },
        getPackage: function (officerId) {
            return $http.get(baseService + '/GetPackage?officerId=' + officerId);
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
            return steptwo;
        },
        saveStepTwo: function (stepTwoData) {
            steptwo.push(stepTwoData);
            stepTwoPersist();
        },
        clearDataStepTwo: function () {
            if (steptwo != null && steptwo != undefined && steptwo.length != 0) {
                steptwo.splice(0, 1);
                stepTwoPersist();
            }
        },
        save: function (data) {
            return $http.post(baseService + '/Register/',
                { Data: data });
        }
    }
})
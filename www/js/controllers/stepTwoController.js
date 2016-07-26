app.controller('stepTwoCtrl', function ($http, $scope, $state, finacialSrv) {


    finacialSrv.getListProvinces().then(function (response) {
        $scope.listProvince = response.data.ResponseData
    })
    $scope.getDistrict = function (provinceId) {
        if (provinceId === null || provinceId == undefined || provinceId === "") {
            $scope.districts = [{
                "Id": undefined,
                "Name": "Chọn tỉnh thành phố"
            }];
        } else {
            finacialSrv.getDistrict(provinceId).then(function (response) {
                $scope.districts = response.data.ResponseData;
            }, function (error) {
                $scope.districts = [{
                    "Id": undefined,
                    "Name": "Chọn tỉnh thành phố"
                }];
            })
        }
    }
    $scope.getDistrictcurrent = function (provinceId) {
        if (provinceId === null || provinceId == undefined || provinceId === "") {
            $scope.districtscurrent = [{
                "Id": undefined,
                "Name": "Chọn tỉnh thành phố"
            }];
        } else {
            finacialSrv.getDistrict(provinceId).then(function (response) {
                $scope.districtscurrent = response.data.ResponseData;
            }, function (error) {
                $scope.districtscurrent = [{
                    "Id": undefined,
                    "Name": "Chọn tỉnh thành phố"
                }];
            })
        }
    }
    $scope.listMaritalStatus =
        [{
            'Id': '1',
            'Name': 'Độc thân'
        },
            {
                'Id': '2',
                'Name': 'Đã kết hôn'
            },
            {
                'Id': '3',
                'Name': 'Ở giá'
            }];
    $scope.listHome =
        [
            {
                'Id': '1',
                'Name': 'Nhà nguyên căn'
            },
            {
                'Id': '2',
                'Name': 'Phòng trọ'
            },
            {
                'Id': '3',
                'Name': 'Motel'
            }
        ];
    $scope.laborcontracts =
        [
            {
                'Id': '1',
                'Name': 'Hợp đồng 1 năm'
            },
            {
                'Id': '2',
                'Name': 'Hợp đồng 1-3 năm'
            },
            {
                'Id': '3',
                'Name': 'Hợp đồng không thời hạn'
            }
        ];
    $scope.completeRegister = function () {
        //Xu lý abc xyz...
        //
        //chuyen qua màn hình thành công.
        $state.go('complete')
    };
});
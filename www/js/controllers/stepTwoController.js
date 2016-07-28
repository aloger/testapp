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
                'Name': 'Hợp đồng dưới 1 năm'
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
    $scope.formofwage =
        [
            {
                'Id': '1',
                'Name': 'Tiền mặt'
            },
            {
                'Id': '2',
                'Name': 'Chuyển khoản qua BIDV'
            },
            {
                'Id': '3',
                'Name': 'Chuyển khoản qua ngân hàng khác'
            }
        ];
    $scope.insurrance =
        [
            {
                'Id': '1',
                'Name': 'Bảo hiểm tai nạn'
            },
            {
                'Id': '2',
                'Name': 'Bảo hiểm nhân thọ'
            },
            {
                'Id': '3',
                'Name': 'Tham gia loại trên 2 năm'
            },
            {
                'Id': '4',
                'Name': 'Không tham gia bảo hiểm'
            }
        ];
    $scope.completeRegister = function () {
        finacialSrv.clearDataStepTwo();
        // if ($scope.ResidentAddress === "" || $scope.ResidentAddress === null || $scope.ResidentAddress === undefined)
        //    $state.go('steptwo')
        // if ($scope.Province === "" || $scope.Province === null || $scope.Province === undefined)
        //     $state.go('steptwo')
        // if ($scope.District === "" || $scope.District === null || $scope.District === undefined)
        //     $state.go('steptwo')
        // if ($scope.CurrentAddress === "" || $scope.CurrentAddress === null || $scope.CurrentAddress === undefined)
        //    $state.go('steptwo')
        // if ($scope.DistrictCurrent === "" || $scope.DistrictCurrent === null || $scope.DistrictCurrent === undefined)
        //    $state.go('steptwo')
        // if ($scope.ProvinceCurrent === "" || $scope.ProvinceCurrent === null || $scope.ProvinceCurrent === undefined)
        //     $state.go('steptwo')
        // if ($scope.YearAddress === "" || $scope.YearAddress === null || $scope.YearAddress === undefined)
        //    $state.go('steptwo')
        // if ($scope.MonthAddress === "" || $scope.MonthAddress === null || $scope.MonthAddress === undefined)
        //    $state.go('steptwo')
        // if ($scope.Phone === "" || $scope.Phone === null || $scope.Phone === undefined)
        //     $state.go('steptwo')
        // if ($scope.Email === "" || $scope.Email === null || $scope.Email === undefined)
        //    $state.go('steptwo')
        // if ($scope.MaritalStatus === "" || $scope.MaritalStatus === null || $scope.MaritalStatus === undefined)
        //    $state.go('steptwo')
        // if ($scope.NumberDepent === "" || $scope.NumberDepent === null || $scope.NumberDepent === undefined)
        //    $state.go('steptwo')
        // if ($scope.HomeStatus === "" || $scope.HomeStatus === null || $scope.HomeStatus === undefined)
        //     $state.go('steptwo')
        // if ($scope.SecrectQuestion === "" || $scope.SecrectQuestion === null || $scope.SecrectQuestion === undefined)
        //    $state.go('steptwo')
        // if ($scope.Formofwage === "" || $scope.Formofwage === null || $scope.Formofwage === undefined)
        //    $state.go('steptwo')
        // if ($scope.Insurrance === "" || $scope.Insurrance === null || $scope.Insurrance === undefined)
        //     $state.go('steptwo')
        // if ($scope.Contract === "" || $scope.Contract === null || $scope.Contract === undefined)
        //    $state.go('steptwo')
        // if ($scope.YearSeniority === "" || $scope.YearSeniority === null || $scope.YearSeniority === undefined)
        //    $state.go('steptwo')
        // if ($scope.MonthSeniority === "" || $scope.MonthSeniority === null || $scope.MonthSeniority === undefined)
        //     $state.go('steptwo')

        $scope.data = {
            ResidentAddress: $scope.ResidentAddress + $scope.District + $scope.Province,
            CurrentAddress: $scope.CurrentAddress + $scope.DistrictCurrent + $scope.ProvinceCurrent,

            YearAddress: $scope.YearAddress,
            MonthAddress: $scope.MonthAddress,
            Phone: $scope.Phone,
            Email: $scope.Email,
            MaritalStatus: $scope.MaritalStatus,
            NumberDepent: $scope.NumberDepent,
            Ownhouses: $scope.HomeStatus,
            Answer: $scope.SecrectQuestion,
            Formsofwage: $scope.Formofwage,
            Typeofwork: $scope.Insurrance,
            Laborcontracts: $scope.Contract,
            YearSeniority: $scope.YearSeniority,
            MonthSeniority: $scope.MonthSeniority,
            ServiceInternet: $scope.BIDVOnline,
            ServiceMobile: $scope.BIDVMobile
        }
        var stepOneData = finacialSrv.getStepOne();
        // var data = new Object();
        // data.FirstName = "thien";
        var data = {
            LastName: "tdhien",
            FirstName: stepOneData.FirstName,
            OfficerId: stepOneData.OfficerId,
            IdentityId: stepOneData.IdentityId,
            IdIssuedDate: stepOneData.IdIssuedDate,
            IdIssuedBy: stepOneData.IdIssuedBy,
            DOB: stepOneData.DOB,
            SchoolId: stepOneData.SchoolId,
            Aboutsalary: stepOneData.Aboutsalary,


            ResidentAddress: $scope.data.ResidentAddress,
            CurrentAddress: $scope.data.CurrentAddress,

            YearAddress: $scope.data.YearAddress,
            MonthAddress: $scope.data.MonthAddress,
            Phone: $scope.data.Phone,
            Email: $scope.data.Email,
            MaritalStatus: $scope.data.MaritalStatus,
            NumberDepent: $scope.data.NumberDepent,
            Ownhouses: $scope.data.Ownhouses,
            Answer: $scope.data.Answer,
            Formsofwage: $scope.data.Formsofwage,
            Typeofwork: $scope.data.Typeofwork,
            Laborcontracts: $scope.data.Laborcontracts,
            YearSeniority: $scope.data.YearSeniority,
            MonthSeniority: $scope.data.MonthSeniority,
            ServiceInternet: $scope.data.ServiceInternet,
            ServiceMobile: $scope.data.ServiceMobile
        }
        var data = $.param({
                LastName: "Tjoem",
               
            });
        finacialSrv.saveStepTwo($scope.data);

        finacialSrv.save(data);
        // $state.go('complete')
    };
});
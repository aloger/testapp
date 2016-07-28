app.controller('stepTwoCtrl', function ($http, $scope, $state, finacialSrv) {

    var stepOneData = finacialSrv.getStepOne();
    finacialSrv.getListProvinces().then(function (response) {
        $scope.listProvince = response.data.ResponseData
    })
    if (stepOneData != null && stepOneData.lenght != 0) {
        finacialSrv.getPackage(stepOneData[0].OfficerId).then(function (response) {
            if (response.data.ResponseData.length != 0) {
                $scope.package = response.data.ResponseData[0];
            } else {
                $scope.package = [];
            }
        });
    } else {
        $scope.package = [];
    }

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
        [
            {
                'Id': '0',
                'Name': 'Độc thân'
            },
            {
                'Id': '1',
                'Name': 'Đã kết hôn'
            },
            {
                'Id': '2',
                'Name': 'Khác'
            }];
    $scope.listHome =
        [
            {
                'Id': '0',
                'Name': 'Nhà riêng'
            },
            {
                'Id': '1',
                'Name': 'Nhà thuê'
            },
            {
                'Id': '2',
                'Name': 'Nhà bố mẹ'
            },
            {
                'Id': '3',
                'Name': 'Mua trả góp'
            },
            {
                'Id': '4',
                'Name': 'Khác'
            }
        ];
    $scope.laborcontracts =
        [
            {
                'Id': '0',
                'Name': 'Hợp đồng dưới 1 năm'
            },
            {
                'Id': '1',
                'Name': 'Hợp đồng 1-3 năm'
            },
            {
                'Id': '2',
                'Name': 'Hợp đồng không thời hạn'
            },
            {
                'Id': '3',
                'Name': 'Khác'
            }
        ];
    $scope.formofwage =
        [
            {
                'Id': '0',
                'Name': 'Tiền mặt'
            },
            {
                'Id': '1',
                'Name': 'Chuyển khoản qua BIDV'
            },
            {
                'Id': '2',
                'Name': 'Chuyển khoản qua ngân hàng khác'
            }
        ];
    $scope.insurrance =
        [
            {
                'Id': '0',
                'Name': 'Bảo hiểm tai nạn'
            },
            {
                'Id': '1',
                'Name': 'Bảo hiểm nhân thọ'
            },
            {
                'Id': '2',
                'Name': 'Tham gia loại trên 2 năm'
            },
            {
                'Id': '3',
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
            ResidentAddress: $scope.ResidentAddress + ' ' + $scope.District + ' ' + $scope.Province,
            CurrentAddress: $scope.CurrentAddress + ' ' + $scope.DistrictCurrent + ' ' + $scope.ProvinceCurrent,

            YearAddress: $scope.YearAddress,
            MonthAddress: $scope.MonthAddress,
            Phone: $scope.Phone,
            Email: $scope.Email,
            MaritalStatus: $scope.MaritalStatus,
            NumberDepent: $scope.NumberDepent,
            Ownhouses: $scope.HomeStatus,
            PrimarySchool: $scope.SecrectQuestion,
            Formsofwage: $scope.Formofwage,
            Typeofwork: $scope.Insurrance,
            Laborcontracts: $scope.Contract,
            PackageId: $scope.package.Id,
            LoanAmount: $scope.LoanAmount,
            YearSeniority: $scope.YearSeniority,
            MonthSeniority: $scope.MonthSeniority,
            ServiceInternet: $scope.BIDVOnline,
            ServiceMobile: $scope.BIDVMobile
        }
        var data = {
            LastName: stepOneData[0].LastName,
            FirstName: stepOneData[0].FirstName,
            Gender: stepOneData[0].Gender,
            OfficerId: stepOneData[0].OfficerId,
            IdentityId: stepOneData[0].IdentityId,
            IdIssuedDate: stepOneData[0].IdIssuedDate.getDate() + "/" + stepOneData[0].IdIssuedDate.getMonth() + "/" + stepOneData[0].IdIssuedDate.getFullYear(),
            IdIssuedBy: stepOneData[0].IdIssuedBy,
            DOB: stepOneData[0].DOB.getDate() + "/" + stepOneData[0].DOB.getMonth() + "/" + stepOneData[0].DOB.getFullYear(),
            SchoolId: stepOneData[0].SchoolId,
            Aboutsalary: stepOneData[0].Aboutsalary,


            ResidentAddress: $scope.data.ResidentAddress,
            CurrentAddress: $scope.data.CurrentAddress,
            LoanAmount: $scope.data.LoanAmount,
            PackageId: $scope.data.PackageId,
            YearAddress: $scope.data.YearAddress,
            MonthAddress: $scope.data.MonthAddress,
            Phone: $scope.data.Phone,
            Email: $scope.data.Email,
            MaritalStatus: $scope.data.MaritalStatus,
            NumberDepent: $scope.data.NumberDepent,
            Ownhouses: $scope.data.Ownhouses,
            PrimarySchool: $scope.data.PrimarySchool,
            Formsofwage: $scope.data.Formsofwage,
            Typeofwork: $scope.data.Typeofwork,
            Laborcontracts: $scope.data.Laborcontracts,
            YearSeniority: $scope.data.YearSeniority,
            MonthSeniority: $scope.data.MonthSeniority,
            ServiceInternet: $scope.data.ServiceInternet,
            ServiceMobile: $scope.data.ServiceMobile
        }
        finacialSrv.saveStepTwo($scope.data);

        finacialSrv.save(data);
        // $state.go('complete')
    };
});
app.controller('stepTwoCtrl', function ($http, $scope, $ionicPopup, $state, finacialSrv) {
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
    finacialSrv.getPositions().then(function (response) {
        $scope.positions = response.data.ResponseData
    })
    finacialSrv.getSchoolName(stepOneData[0].SchoolId).then(function (response) {
        $scope.schoolNameTmp = response.data.ResponseData[0];
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
    var showAlert = function (messenger) {
        var alertPopup = $ionicPopup.alert({
            title: 'Thông báo',
            template: messenger
        });
        alertPopup.then(function (res) {
        });
    };
    $scope.completeRegister = function () {
        finacialSrv.clearDataStepTwo();

        if ($scope.LoanAmount === "" || $scope.LoanAmount === null || $scope.LoanAmount === undefined || $scope.LoanAmount < 1000000) {
            showAlert("Bạn phải chọn mức vay");
            return;
        }
        if ($scope.ResidentAddress === "" || $scope.ResidentAddress === null || $scope.ResidentAddress === undefined) {
            showAlert("Địa chỉ thường trú không được bỏ trống");
            return;
        };
        if ($scope.Province === "" || $scope.Province === null || $scope.Province === undefined) {
            showAlert("Tỉnh/Thành phố thường trú không được bỏ trống");
            return;
        }
        if ($scope.District === "" || $scope.District === null || $scope.District === undefined) {
            showAlert("Quận/Huyện thường trú không được bỏ trống");
            return;
        }
        if ($scope.CurrentAddress === "" || $scope.CurrentAddress === null || $scope.CurrentAddress === undefined) {
            showAlert("Địa chỉ hiện tại không được bỏ trống");
            return;
        }
        if ($scope.ProvinceCurrent === "" || $scope.ProvinceCurrent === null || $scope.ProvinceCurrent === undefined) {
            showAlert("Tỉnh/Thành phố hiện tại không được bỏ trống");
            return;
        }
        if ($scope.DistrictCurrent === "" || $scope.DistrictCurrent === null || $scope.DistrictCurrent === undefined) {
            showAlert("Quận/Huyện hiện tại không được bỏ trống");
            return;
        }
        if ($scope.Phone === "" || $scope.Phone === null || $scope.Phone === undefined) {
            showAlert("Số điện thoại không được bỏ trống");
            return;
        }
        if ($scope.Email === "" || $scope.Email === null || $scope.Email === undefined) {
            showAlert("Email không được bỏ trống");
            return;
        }
        if ($scope.MaritalStatus === "" || $scope.MaritalStatus === null || $scope.MaritalStatus === undefined) {
            showAlert("Tình trạng hôn nhân không được bỏ trống");
            return;
        }
        if ($scope.HomeStatus === "" || $scope.HomeStatus === null || $scope.HomeStatus === undefined) {
            showAlert("Loại nhà sở hữu không được bỏ trống");
            return;
        }
        if ($scope.SecrectQuestion === "" || $scope.SecrectQuestion === null || $scope.SecrectQuestion === undefined) {
            showAlert("Câu hỏi bảo mật không được bỏ trống");
            return;
        }
        if ($scope.Formofwage === "" || $scope.Formofwage === null || $scope.Formofwage === undefined) {
            showAlert("Hình thức nhận lương không được bỏ trống");
            return;
        }
        if ($scope.Insurrance === "" || $scope.Insurrance === null || $scope.Insurrance === undefined) {
            showAlert("Bảo hiểm không được bỏ trống");
            return;
        }
        if ($scope.Contract === "" || $scope.Contract === null || $scope.Contract === undefined) {
            showAlert("Hợp đồng lao động không được bỏ trống");
            return;
        }
        if ($scope.YearSeniority === "" || $scope.YearSeniority === null || $scope.YearSeniority === undefined) {
            showAlert("Năm thâm niên không được bỏ trống");
            return;
        }
        if ($scope.MonthSeniority === "" || $scope.MonthSeniority === null || $scope.MonthSeniority === undefined) {
            showAlert("Tháng thâm niên không được bỏ trống");
            return;
        }
        var stepOneData = finacialSrv.getStepOne();
        var listDistrict = $scope.listProvince;
        var ProvinceName = "";
        angular.forEach(listDistrict, function (value, key) {
            if ($scope.Province == value.Id) {
                ProvinceName = value.Name;
            }
        });
        var ProvinceCurrent = "";
        angular.forEach(listDistrict, function (value, key) {
            if ($scope.ProvinceCurrent == value.Id) {
                ProvinceCurrent = value.Name;
            }
        });

        var Position = "";

        var id = stepOneData[0].OfficerId;
        angular.forEach($scope.positions, function (value, key) {
            if (id == value.Id) {
                Position = value.Name;
            }
        });
        var SchoolName = "";

        SchoolName = $scope.schoolNameTmp;
        $scope.data = {
            ResidentAddress: $scope.ResidentAddress + ' ' + $scope.District + ' ' + $scope.Province,
            TempResideantAddress: $scope.ResidentAddress + ' ' + $scope.District + ' ' + ProvinceName,
            DOB: stepOneData[0].DOB.getDate() + "/" + stepOneData[0].DOB.getMonth() + "/" + stepOneData[0].DOB.getFullYear(),
            TempCurrentAddress: $scope.CurrentAddress + ' ' + $scope.DistrictCurrent + ' ' + ProvinceCurrent,
            TempSchool: SchoolName,
            IdIssuedDate: stepOneData[0].IdIssuedDate.getDate() + "/" + stepOneData[0].IdIssuedDate.getMonth() + "/" + stepOneData[0].IdIssuedDate.getFullYear(),
            CurrentAddress: $scope.CurrentAddress + ' ' + $scope.DistrictCurrent + ' ' + $scope.ProvinceCurrent,
            TempPosition: Position,
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


        finacialSrv.save(data).then(function (response) {
            if (response.data.ResponseCode == 0) {
                finacialSrv.saveStepTwo($scope.data);
                $state.go('complete')
            }
        });

    };
    $scope.formatCurrency = function (nStr) {
        if(nStr===undefined||nStr===""||nStr.length==0)
            return 0;
        nStr += '';
        var x = nStr.split('.');
        var x1 = x[0];
        var x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 + x2;
    }
});

app.controller('stepOneCtrl', function ($scope, $state, $ionicPopup, finacialSrv) {
    $scope.IdIssuedDate = "";
    $scope.school = "";

    $scope.clickedValueModel = "";
    $scope.removedValueModel = "";
    $scope.gender =
        [
            {
                'Id': '',
                'Name': 'Chọn giới tính'
            },
            {
                'Id': '0',
                'Name': 'Nam'
            },
            {
                'Id': '1',
                'Name': 'Nữ'
            }
        ];
    var items;
    finacialSrv.getListSchools().then(function (response) {
        items = response.data.ResponseData
    })
    $scope.getTestItems = function (query) {
        if (query) {
            return items.filter(function (item) {
                return (item.Id.indexOf(query) != -1 || item.Name.toLowerCase().indexOf(query.toLowerCase()) != -1)
            });
        }
        return { "Id": "", "Name": "Không tìm thấy" };
    }
    $scope.itemsClicked = function (callback) {
        $scope.clickedValueModel = callback;
    };
    $scope.itemsRemoved = function (callback) {
        $scope.removedValueModel = callback;
    };
    var showAlert = function (messenger) {
        var alertPopup = $ionicPopup.alert({
            title: 'Thông báo',
            template: messenger
        });
        alertPopup.then(function (res) {
        });
    };
    //Handle event clicked.
    $scope.GotoStep2 = function () {
        finacialSrv.clearDataStepOne();
        if ($scope.LastName === "" || $scope.LastName === null || $scope.LastName === undefined) {
            showAlert("Họ và tên đệm không được bỏ trống"); return;
        }
        if ($scope.FirstName === "" || $scope.FirstName === null || $scope.FirstName === undefined) {
            showAlert("Tên không được bỏ trống"); return;
        }
        if ($scope.Gender === "" || $scope.Gender === null || $scope.Gender === undefined) {
            showAlert("Giới tính không được bỏ trống"); return;
        }
        if ($scope.Position === "" || $scope.Position === null || $scope.Position === undefined) {
            showAlert("Chức vụ không được bỏ trống"); return;
        }
        if ($scope.IdentityId === "" || $scope.IdentityId === null || $scope.IdentityId === undefined) {
            showAlert("CMND/Passport không đúng"); return;
        }
        if ($scope.IdIssuedDate === "" || $scope.IdIssuedDate === null || $scope.IdIssuedDate === undefined) {
            showAlert("Ngày cấp không được bỏ trống"); return;
        }
        if ($scope.IdIssuedBy === "" || $scope.IdIssuedBy === null || $scope.IdIssuedBy === undefined) {
            showAlert("Nơi cấp không được bỏ trống"); return;
        }
        if ($scope.DOB === "" || $scope.DOB === null || $scope.DOB === undefined) {
            showAlert("Ngày sinh không được bỏ trống"); return;
        }
        var date1 = new Date()
        if ($scope.DOB > date1.setYear(date1.getYear() - 18)) {
            showAlert("Độ tuổi không phù hợp"); return;
        }
        if ($scope.school === "" || $scope.school === null || $scope.school === undefined) {
            showAlert("Đơn vị công tác không được bỏ trống"); return;
        }
        $scope.data = {
            LastName: $scope.LastName,
            FirstName: $scope.FirstName,
            Gender: $scope.Gender,
            OfficerId: $scope.Position,
            IdentityId: $scope.IdentityId,
            IdIssuedDate: $scope.IdIssuedDate,
            IdIssuedBy: $scope.IdIssuedBy,
            DOB: $scope.DOB,
            SchoolId: $scope.school,
            Aboutsalary: $scope.aboutsalary,
        }
        finacialSrv.saveStepOne($scope.data);
        $state.go('steptwo')
    };
    $scope.checkcmnd = function (IdentityId) {
        if (IdentityId.length === 9) {
            return true;
        }
    }

    //Positions
    finacialSrv.getPositions().then(function (response) {
        $scope.positions = response.data.ResponseData
    })
});


app.controller('stepOneCtrl', function ($scope, $state, finacialSrv) {
    $scope.IdIssuedDate = new Date();
    $scope.school = "";
    $scope.clickedValueModel = "";
    $scope.removedValueModel = "";
    $scope.gender =
        [
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
    //Handle event clicked.
    $scope.GotoStep2 = function () {
        finacialSrv.clearDataStepOne();
        if ($scope.LastName === "" || $scope.LastName === null || $scope.LastName === undefined)
            return;
        if ($scope.FirstName === "" || $scope.FirstName === null || $scope.FirstName === undefined)
            return;
        if ($scope.LastName === "" || $scope.LastName === null || $scope.LastName === undefined)
            return;
        if ($scope.Position === "" || $scope.Position === null || $scope.Position === undefined)
            return;
        if ($scope.IdentityId === "" || $scope.IdentityId === null || $scope.IdentityId === undefined)
            return;
        if ($scope.IdIssuedDate === "" || $scope.IdIssuedDate === null || $scope.IdIssuedDate === undefined)
            return;
        if ($scope.IdIssuedBy === "" || $scope.IdIssuedBy === null || $scope.IdIssuedBy === undefined)
            return;
        if ($scope.DOB === "" || $scope.DOB === null || $scope.DOB === undefined)
            return;
        if ($scope.school === "" || $scope.school === null || $scope.school === undefined)
            return;
        if ($scope.aboutsalary === "" || $scope.aboutsalary === null || $scope.aboutsalary === undefined)
            return;
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

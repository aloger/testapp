
app.controller('stepOneCtrl', function ($scope, $state, finacialSrv) {
    $scope.IdIssuedDate = new Date();
    $scope.school = "";
    $scope.clickedValueModel = "";
    $scope.removedValueModel = "";
    var items ; 
    finacialSrv.getListSchools().then(function (response) {
        items=response.data.ResponseData
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
        //Xu lý abc ...
        //
        //chuyen qua step2.
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

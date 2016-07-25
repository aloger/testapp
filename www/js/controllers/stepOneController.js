
app.controller('stepOneCtrl', function ($scope, $state, finacialSrv) {
    $scope.school = "";
    $scope.clickedValueModel = "";
    $scope.removedValueModel = "";
    var items =
        [
            {
                'id': '1',
                'name': 'Trường maricurie'
            },
            {
                'id': '2',
                'name': 'Trường Lê Hồng Phong'
            },
            {
                'id': '3',
                'name': 'Trường Nguyễn trãi'
            },
            {
                'id': '4',
                'name': 'Trường Nguyễn thị minh khai'
            },
            {
                'id': '5',
                'name': 'Trường Lê Quý Đôn'
            }
        ];
    $scope.getTestItems = function (query) {
        if (query) {
            return items.filter(function (value) {
                return (value.id.indexOf(query) != -1 || value.name.toLowerCase().indexOf(query.toLowerCase()) != -1)
            });

        }
        return { "id": "", "name": "Không tìm thấy" };
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
        // $state.go('step2')
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

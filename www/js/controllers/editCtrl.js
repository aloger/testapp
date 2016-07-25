app.controller('EditCtrl', function ($http, $scope,$state) {
    
    $scope.listProvince =
        [
            {
                'id': '1',
                'name': 'Sài Gòn'
            },
            {
                'id': '2',
                'name': 'Hà Lội'
            },
            {
                'id': '3',
                'name': 'Bình Thuận'
            },
            {
                'id': '4',
                'name': 'Lodon'
            },
            {
                'id': '5',
                'name': '3 Ri'
            }
        ];
    var listDistrict =
        [
            {
                'id': '1',
                'name': 'Sài Gòn'
            },
            {
                'id': '2',
                'name': 'Hà Lội'
            },
            {
                'id': '3',
                'name': 'Bình Thuận'
            },
            {
                'id': '4',
                'name': 'Lodon'
            },
            {
                'id': '5',
                'name': '3 Ri'
            }
        ];
    var listMaritalStatus =
        [
            {
                'id': '1',
                'name': 'Độc thân'
            },
            {
                'id': '2',
                'name': 'Đã kết hôn'
            },
            {
                'id': '3',
                'name': 'Ở giá'
            }
        ];
    var listHome =
        [
            {
                'id': '1',
                'name': 'Nhà nguyên căn'
            },
            {
                'id': '2',
                'name': 'Phòng trọ'
            },
            {
                'id': '3',
                'name': 'Motel'
            }
        ];
        $scope.completeRegister = function() {
    //Xu lý abc xyz...
    //
    //chuyen qua màn hình thành công.
    $state.go('complete')
    };
});
angular.module("umbraco").controller("imageBlockController", function ($scope, mediaResource) {

    $scope.$watch(
        function () { return $scope.block.data.image; },
        function () {
            var imageUdi = $scope.block.data.image;
            if (imageUdi) {
                mediaResource.getById(imageUdi)
                    .then(function (media) {
                        $scope.imageUrl = media.mediaLink + "?width=500&upscale=false";
                    });
            } else {
                $scope.imageUrl = "";
            }
        }
    );
});
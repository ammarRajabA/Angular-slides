angular.module('angular-slides')
.directive('slides', [function () {
        return {
            restrict: 'E',
            templateUrl: '/app/shared/slides/slides.view.html',
            scope: {
                images: '=',
                data:'='
            }
        }
    }
])
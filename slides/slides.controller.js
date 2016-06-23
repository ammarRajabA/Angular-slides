angular.module('angular-slides')
.controller('slidesController', ['$scope','$interval', function (scope, interval) {
        pause = false;
        scope.currentImg = 0;
        
        scope.nextImg = function () {
            scope.currentImg += 1;
            if (scope.currentImg == scope.images.length) {
                scope.currentImg = 0;
            }
        }
        scope.prevImg = function () {
            scope.currentImg -= 1;
            if (scope.currentImg < 0) {
                scope.currentImg = scope.images.length-1;
            }
        }
        scope.isCurrent = function (index) {
            return (index == scope.currentImg)? true:false;
        }
        scope.pauseSlide = function () {
            pause = true;
        }
        scope.resumeSlide = function () {
            pause = false;
        }
        intervalPromise = interval(function () {
            if (!pause) {
                scope.nextImg();
            }
        }, 5000, false);
    }
])
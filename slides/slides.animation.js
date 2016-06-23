angular.module('angular-slides')
.animation('.slide-animation', [function (){
        return {
            addClass: function (element, className, done) {
                done()
            },
            removeClass: function (element, className, done) {
                element.css('display', 'none');
                if (className == "ng-hide") {
                    jQuery(element).fadeIn(1000, done);
                }
                else {
                    done()
                }
            }
        }
    }
])
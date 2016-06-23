# Angular-slides
Angular directive for displaying images in a slide show.


Dependencies:
  - angular-touch
  - angular-animate

Usage:

In your main module , include angular-slides like this :

    angular.module('gallery',['angular-slides'])
  

In controller :
  
    scope.images_urls=["http://url/to/image/image1.jpg","http://url/to/image/image2.jpg","http://url/to/image/image3.jpg"]
    scope.display_info="this is a test slide"


In the view , you can use the directive :

    
    <slides images="images_urls" data="display_info"></slides>

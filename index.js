var images = [
    'images/back0.jpg',
    'images/back1.jpg',
    'images/back2.jpg',
    'images/back3.jpg',
    'images/back4.jpg',
    'images/back5.jpg',
    'images/back6.jpg',
    'images/back1.jpg',
    'images/back4.jpg'
];
var img = document.querySelector('.main');
    var index = 0;
    
    var updateImage = function() {
    
        if (index >= images.length) {
            index = 0;
        }
        
        img.style.background = 'url(' + images[index] + ')';
        img.style.backgroundSize = 'cover';
        img.style.transition = 'all 2s';

        index++;
       
        // set the background image
        
}
// updateImage();
// setInterval(updateImage, 5000);
    
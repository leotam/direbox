USER = "TUTORIAL"
// build items array
var items = [
    {
        'h': 1920,
        'title': '<p class="help">Hello and welcome to the Diabetic Retinopathy Boxing Extravaganza! This viewer works well with Firefox and Chrome, support for Safari and Internet Explorer is not well-tested.</p><ul class="help">In normal view:<li>Click to zoom in.</li></ul><ul class="help">In zoom view:<li>Drag to pan around.</li><li>Click to return to normal view.</li></ul><ul class="help">In normal view:<li>Click anywhere and drag left or right  (i.e. swipe) to change images.  Arrow keys also change the image.</li></ul><div class="caption"><span>23371_left: </span><b>0 (Normal)</b></div>',
        'w': 2560,
        'src': 'data/train/23371_left.jpeg'
    },
    {'h': 3168, 'title': '<ul class="help">Box editing:<li>Allow automatic saving of boxes by toggling the Allow Save button in the upper-right.</li><li>Double-click to add a box.</li><li>Click on it to change its type.</li><li>Drag to move or adjust its sides to resize.</li><li>Click and hold the box to delete it, or alt+click it.</li><li>Shift+drag the box to clone it.</li><li>To save, change images by swiping or using the arrow keys.</li></ul><ul class="help">Known issues:<li>Double-clicking also quickly zooms-in and out, using a mouse insead of a touchpad helps.</li><li>With a MacBook, you may need to actually double *click* the touchpad instead of tapping it twice.</li></ul><div class="caption"><span>114_right: </span><b>1 (NPDR)</b></div>', 'w': 4752, 'src': 'data/train/114_right.jpeg'},
    {'h': 3168, 'title': '<ul class="help">Practice:<li>Delete the existing boxes.</li><li>Draw boxes around the optic disc and macula.</li><li>Press the Restore Boxes button to undo the edits and recall what is stored in the database.</li><li>Toggle Hide Boxes to temporarily make the boxes invisible. This is helpful if they become distracting.</li><li>Toggle Flag Case if you find the image or its severity grade difficult to understand.</li></ul><p class="help">In general, don\'t worry too much about making the boxes exactly fit lesions. As long as the lesions take up at least 50% of the area, that will work great.</p><div class="caption"><span>41946_right: </span><b>1 (NPDR)</b></div>', 'w': 4752, 'src': 'data/train/41946_right.jpeg'},
    {'h': 2592, 'title': '<ul class="help">Streamlining the workflow:<li>Delete any existing boxes.</li><li>Zoom into the hemorrhages on the right side.</li><li>Create a box for one of the hemorrhages and resize it around the lesion.</li><li>Use shift+drag to clone it to a new nearby hemorrhage, while doing this try to align the upper-left corner of the box to upper-left edge of the new lesion.</li><li>Drag the bottom-right box corner to make it tight around the new lesion.</li><li>Make sure your boxes are being saved, then move on to the next image.</li></ul><p class="help">This minimizes the number of actions you need to do to define a box to just 2 clicks.</p><div class="caption"><span>28668_right: </span><b>3 (NPDR)</b></div>', 'w': 3888, 'src': 'data/train/28668_right.jpeg'},
    {'h': 3264, 'title': '<p class="help">Sometimes lesions are difficult to spot, we can apply filters to improve their visibility.</p><ul class="help">Filters:<li>Press the Greyscale button on the left to apply a greyscale filter.</li><li>Press Pinhole to apply a contrast-enhanced greyscale filter.</li><li>Press Revert Image to restore the original image.</li></ul><div class="caption"><span>34547_left: </span><b>3 (NPDR)</b></div>', 'w': 4928, 'src': 'data/train/34547_left.jpeg'},
    {'h': 1944, 'title': '<p class="help">Use a custom filter to increase the brightness and better visualize the lesions on the left side of the image.</p><ul class="help">Custom filters:<li>Press Filters to open up the detailed filter menu.</li><li>Toggle RGB to switch to greyscale.</li><li>Click and drag on the thumbnail preview to control brightness (up/down) and contrast (left/right) simultaneously.</li><ul><li>Dragging upwards increases brightness, to the right increases contrast.</li><li>Dragging up and right usually helps to make details more salient.</li></ul><li>Shift+drag the preview to control gamma (up/down) and vibrance (left/right).<ul><li>Reducing gamma tends to increase brightness in darker areas. This is mapped to dragging upwards for consistency.</li><li>Increasing vibrance tends to make blood vessels more visible.</li></ul></li><li>Alternatively, adjust the sliders.</li><li>Press Apply to filter the high-resolution image. Be patient this could take a few seconds.</li></ul></ul><ul class="help">Known issues:<li>Adjusting gamma and vibrance can cause the preview to flicker, adjust these slowly.</li><li>Filter options are very memory intensive. If they do not appear to be working, close the browser and open it again. In Chrome, closing the tab (ctrl/cmd+w) and re-opening the tab (ctrl/cmd+shift+t) also works.</li></ul><div class="caption"><span>163_right: </span><b>3 (NPDR)</b></div>', 'w': 2592, 'src': 'data/train/163_right.jpeg'},
    {'h': 3264, 'title': '<p class="help">The next few sample images are provided for practice in making boxes.</p><div class="caption"><span>2956_left: </span><b>1 (NPDR)</b></div>', 'w': 4928, 'src': 'data/train/2956_left.jpeg'},
    {'h': 3168, 'title': '<div class="caption"><span>32686_right: </span><b>2 (NPDR)</b></div>', 'w': 4752, 'src': 'data/train/32686_right.jpeg'},
    {'h': 2592, 'title': '<div class="caption"><span>9569_right: </span><b>2 (NPDR)</b></div>', 'w': 3888, 'src': 'data/train/9569_right.jpeg'},
    {'h': 3168, 'title': '<ul class="help">Wrapping up:<li>You can jump to a different image by changing the "pid=#" in the address bar.</li><li>IMPORTANT: Save a bookmark (ctrl/cmd+d) when you finish a session of marking boxes on the training set, otherwise you will have to guess where you left off next time.</li><li>Begin working with the <a target="_blank" href="ready2rumble.html#&gid=1&pid=8000">training set</a>. It will take a few moments to load as there are many more images. You may need to change to a random pid number (anything from 1-10247) to jump to somewhere that hasn\'t been marked yet.</li><li>Thank you for helping!</li></ul><p class="help">If you encounter any bugs or unexpected behavior, try refreshing the page. Otherwise, please email sujason@stanford.edu</p><div class="caption"><span>40078_right: </span><b>3 (NPDR)</b></div>', 'w': 4752, 'src': 'data/train/40078_right.jpeg'},
];
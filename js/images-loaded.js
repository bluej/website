docReady( function() {
  // init Isotope
  var grid = document.querySelector('.grid');

  var msnry = new Masonry( grid, {
    itemSelector: '.grid-item',
      columnWidth: 200,
      percentPosition: true,
      gutter: 10, 
      isFitWidth: true
  });

  imagesLoaded( grid, function() {
    // layout Masonry after each image loads
    msnry.layout();
  });

});
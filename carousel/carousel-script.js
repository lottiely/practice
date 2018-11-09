carousel = (() => {
  // Read necessary elements from the DOM once
  var box = document.querySelector('.carouselbox');
  var next = box.querySelector('.next');
  var prev = box.querySelector('.prev');

  //Define the global counter, the items and the current item
  var items = box.querySelectorAll('.content li'); //puts all list items in an array.
  var counter = 0;
  var amount = items.length;
  var current = items[0];

  box.classList.add('active');

  //navigate through the carousel
  function navigate(direction) {

    //hide the old current list item
    current.classList.remove('current');

    //calculate the new position
    counter = counter + direction;

    //if the prev was chosen and the counter is less than 0
    //(in other words: carousel is 1 and prev button is clicked)
    //make the counter the last element (4)
    //thus looping the carousel
    if (direction === -1 &&
        counter < 0) {
      counter = amount - 1;
    }

    //if the next button was clicked and there is no item elements
    //(in otherwords: carousel is at 4--the end of the list--and next button is clicked)
    //set the counter to 0 (loops back to 1)
    if (direction === 1 &&
        !items[counter]) {
      counter = 0;
    }

    //set new current element
    //and add CSS class
    current = items[counter];
    current.classList.add('current');
  }

  //add event handlers to buttons
  next.addEventListener('click', (ev) => {
    navigate(1);
  });
  prev.addEventListener('click', (ev) => {
    navigate(-1);
  });
  //show the first element
  //(when direction is 0, counter doesn't change)
  navigate(0);
})();

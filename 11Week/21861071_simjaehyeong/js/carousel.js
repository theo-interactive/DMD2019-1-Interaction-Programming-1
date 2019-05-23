console.clear();

var flipContainer = $('.flipster'),
    flipItemContainer = flipContainer.find('.flip-items'),
    flipItem = flipContainer.find('li');

var f = flipContainer.flipster({
  itemContainer: flipItemContainer,
  itemSelector: flipItem,
  loop: true,
  style: 'carousel',
  spacing: -0.5,
  scrollwheel: false,
  //nav: 'after',
  buttons: false
});
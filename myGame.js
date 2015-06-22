var responses = [{
  "listing_id": 0016,
  "category_id": "Muffins",
  "productImage": "<img src='images/store_large/multigrain.jpg'>",
  "productThumb": "<img src='images/thumbs/multigrain.jpg'>",
  "productTitle": "Multigrain",
  "productDescription": "One of my best friends came into town for Thanksgiving and we were going to pick her up at the airport. I knew she’d be hungry so I baked these muffins. Sure enough, her first text when her flight landed was: Hungarian. Which is, of course, how we tell each other we’re hungry. After finding her in the holiday airport traffic behind an Alamo bus she settled into the back seat of our car and ate the muffin. She loved it, and I loved having her back in town. It was a great start to the holiday week.",
  "pairing": "Partagas: No 4",
  "productPrice": 20.00,
  "Country of Origin": "Republic of California",
  "quantity": 1,
}];

var templates = {};


templates.gamePage = [
  '<div id="gamePageTitle">',
    '<h2><%= gameTitle %></h2>',
  '</div>',
  '<div id="gamePageContent">',
    '<div id="gamePageLeft">',
      '<div id="gamePageLeftBlock">',
      '</div>',
    '</div>',
    '<div id="gamePageRight">',
      '<div id="gamePageRightBlock">',
      '<div id="gamePageContent">',
      '<%= firstName %>',
      '<%= profileImage %>',
      '<%= profileImage %>',
      '<%= profileImage %>',
      '</div>',
    '</div>',
  '</div>'
].join("");

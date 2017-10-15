//defining array randomizer function
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

//defining quotes array, scroll further for quotes object definition

var quotesArray = [{"quote":"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
"author":"Ralph Waldo Emerson"},
{"quote":"Without music, life would be a mistake.",
"author":"Friedrich Nietzsche"},
{"quote":"I am so clever that sometimes I don't understand a single word of what I am saying.",
"author":"Oscar Wilde"},
{"quote":"To live is the rarest thing in the world. Most people exist, that is all.",
"author":"Oscar Wilde"},
{"quote":"You only live once, but if you do it right, once is enough.",
"author":"Mae West"},
{"quote":"Two things are infinite: the universe and human stupidity; and I'm not sure about the former.",
"author":"Albert Einstein"},
{"quote":"It is better to be hated for what you are than to be loved for what you are not.",
"author":"André Gide"},
{"quote":"The fool doth think he is wise, but the wise man knows himself to be a fool.",
"author":"William Shakespeare"},
{"quote":"I have not failed. I've just found 10,000 ways that won't work.",
"author":"Thomas A. Edison"},
{"quote":"Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
"author":"Albert Einstein"},
{"quote":"Outside of a dog, a book is man's best friend. Inside of a dog it's too dark to read.",
"author":"Groucho Marx"},
{"quote":"If you don't stand for something you will fall for anything.",
"author":"Gordon A. Eadie"},
{"quote":"A woman is like a tea bag; you never know how strong it is until it's in hot water.",
"author":"Eleanor Roosevelt"},
{"quote":"It does not do to dwell on dreams and forget to live.",
"author":"J.K. Rowling"},
{"quote":"It is our choices, Harry, that show what we truly are, far more than our abilities.",
"author":"J.K. Rowling"},
{"quote":"Never put off till tomorrow what may be done day after tomorrow just as well.",
"author":"Mark Twain"},
{"quote":"If you can't explain it to a six year old, you don't understand it yourself.",
"author":"Albert Einstein"},
{"quote":"Sometimes the questions are complicated and the answers are simple.",
"author":"Dr. Seuss"},
{"quote":"I'm not afraid of death; I just don't want to be there when it happens.",
"author":"Woody Allen"},
{"quote":"Life isn't about finding yourself. Life is about creating yourself.",
"author":"George Bernard Shaw"},
{"quote":"Not all of us can do great things. But we can do small things with great love.",
"author":"Mother Teresa"},
{"quote":"I find television very educating. Every time somebody turns on the set, I go into the other room and read a book.",
"author":"Groucho Marx"},
{"quote":"Do one thing every day that scares you.",
"author":"Eleanor Roosevelt"},
{"quote":"The trouble with having an open mind, of course, is that people will insist on coming along and trying to put things in it.",
"author":"Terry Pratchett, Diggers"},
{"quote":"Not all those who wander are lost.",
"author":"J.R.R. Tolkien"},
{"quote":"What a slut time is. She screws everybody.",
"author":"John Green, The Fault in Our Stars"},
{"quote":"I have never let my schooling interfere with my education.",
"author":"Mark Twain"}]

quotesArray_randomized = shuffle(quotesArray);

var quotesCursor = {
  quotesArray:quotesArray_randomized,
  currentPosition:0
}

quotesCursor.isFirst = function() {
  if (this.currentPosition === 0) {
    return true;
  } else {
    return false;
  }
}

quotesCursor.isLast = function() {
  if (this.currentPosition == (this.quotesArray.length - 1)){
    return true;
  } else {
    return false;
  }
}

quotesCursor.moveCursor = function(increment) {
  this.currentPosition = this.currentPosition + increment;
}

quotesCursor.getQuote = function() {
  position = this.currentPosition;
  return this.quotesArray[position];
}

quotesCursor.nextQuote = function() {
  if(quotesCursor.isLast()) {
    this.currentPosition = 0;
    return this.getQuote();
  } else {
    this.moveCursor(1);
    return this.getQuote();
  }
}

quotesCursor.prevQuote = function() {
  if(quotesCursor.isFirst()) {
    return this.getQuote();
  } else {
    this.moveCursor(-1);
    return this.getQuote();
  }
}

$("document").ready(function () {
  var quotesObject = quotesCursor.getQuote();
  console.log(quotesObject.author);
  console.log(quotesObject.quote);
  $("#quoteBox q, #quoteBox cite").hide();
  $("#quoteBox q").html(quotesObject.quote);
  $("#quoteBox cite").html(quotesObject.author);

  $("#quoteBox q, #quoteBox cite").delay(1000).fadeIn(500);
})

$(".actionButtons  #Prev").click(function() {
 $("#quoteBox q, #quoteBox cite").fadeOut(500, function() {
 var quoteObject = quotesCursor.prevQuote();
 $("#quoteBox q").html(quoteObject.quote);
 $("#quoteBox cite").html(quoteObject.author);
 $(this).fadeIn(500);
 console.log("I've been clicked!");
    });
  });

 $(".actionButtons  #Next").click(function() {
 $("#quoteBox q, #quoteBox cite").fadeOut(500, function() {
 var quoteObject = quotesCursor.nextQuote();
 $("#quoteBox q").html(quoteObject.quote);
 $("#quoteBox cite").html(quoteObject.author);
 $(this).fadeIn(500);
 console.log("I've been clicked!");
    });
  });

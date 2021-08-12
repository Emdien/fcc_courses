let quotes;

function getQuotesAsync() {
  return $.getJSON(
    "https://gist.githubusercontent.com/shreyasminocha/7d5dedafc1fe158f82563c1223855177/raw/325d51aca7165b2498971afcff9bed286a52dc0e/quotes.json",
    function (data) {
      quotes = data;
    }
  );
}

function getQuote() {
  let quoteObject = quotes[Math.floor(Math.random() * quotes.length)];

  $("#text").text(quoteObject.quote);
  $("#author").text("- " + quoteObject.author);
  $("#tweet-quote").attr('href', `https://twitter.com/intent/tweet?text=` + encodeURIComponent('"' + quoteObject.quote + '" ' + quoteObject.author))
}

$(document).ready(function () {
  getQuotesAsync().then(function () {
    getQuote();
  });
});

$("#new-quote").click(function() {
  getQuote();
})
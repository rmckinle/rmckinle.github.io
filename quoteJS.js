$(document).ready(function() {
  
  var text = ""
  
  $("#quoteButton").click(function(){
    $.ajax({
      url:'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(quote) {
        text = quote[0].content;
        console.log(text);
        $(".quoteText").html(quote[0].content);
        $(".quoteAuthor").html(quote[0].title);
      }, cache:false
    })
  })
  
  
  
  
  
})

$(document).ready(function() {
  
  $("#quoteButton").click(function(){
    $.ajax({
      url:'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(quote) {
        $(".quoteText").html(quote[0].content);
        $(".quoteAuthor").html(quote[0].title);
      }, cache:false
    })
  })
  
  
  
  
  
})
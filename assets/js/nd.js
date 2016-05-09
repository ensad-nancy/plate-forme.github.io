// var templates = getTemplates();

$.ajax({
    url: "http://api.tumblr.com/v2/blog/nouveau.plateforme.org/posts/?api_key=Srhk9qkcJO69pAoB4ltM5uIqpwUBO7kgDqDEaCD9Jo8EafWyHE&notes_info=true",
    dataType: 'jsonp',
    success: function(data){
        $('#results').html(plateforme.posts( data.response ) );
        $("img").addClass('img-responsive');
        $("iframe").addClass('embed-responsive-item').wrap( "<div class='embed-responsive embed-responsive-16by9'></div>" );;
    }
});

function getTemplates(){
  var t = [];
  $('script[type*=handlebars-template]').each(function(){
    t[$(this).attr('id')] = Handlebars.compile($(this).html());
  })
  return t;
}

Handlebars.registerHelper('debug', function(optionalValue) {
  console.log('Current Context');
  console.log('====================');
  console.log(this);

  if (optionalValue) {
    console.log('Value');
    console.log('====================');
    console.log(optionalValue);
  }
});
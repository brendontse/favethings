$(document).ready(function() {
  $('form.questions').submit(function(event) {
    event.preventDefault();

    var responses = [
      $('#food').val(),
      $('#movie').val(),
      $('#season').val()
    ]

    var outputArray = []
    outputArray.push(responses[0], responses[1], responses[2]);

    $('li#output1').text(outputArray[0]);
    $('li#output2').text(outputArray[1]);
    $('li#output3').text(outputArray[2]);


  });
});

var sys = require('util');
var exec = require('child_process').exec;
let output;

child = exec("nmcli d wifi", function (error, stdout, stderr) {
  // sys.print('stdout: ' + stdout);
  // sys.print('stderr: ' + stderr);
  if (error !== null) {
    console.log('exec error: ' + error);
  }
  output = stdout;

  console.log(stdout);  //Let us log the output for development purposes.
  //TODO: We have to remove this in the production mode.
});


$('#get_ssid').click(function(){
  console.log(output);  //TODO: We have to remove this in the production mode.
  $('#terminal_output').html(output).attr('class','animated fadeIn');
});

$('#info').click(function(){
  $('#details_buttons').attr('class', 'animated wobble col-sm-6');
  $('#info_section').attr('class', 'animated slideInRight col-sm-6');
  $('#info_section').css('visibility','visible');
});

var sys = require('util');
var exec = require('child_process').exec;
let output
let connection_output;
 // nmcli d wifi connect EEE password '12345678901234567890123456'
child = exec("nmcli d wifi", function (error, stdout, stderr) {
  // sys.print('stdout: ' + stdout);
  // sys.print('stderr: ' + stderr);
  if (error !== null) {
    console.log('exec error: ' + error);
  }
  output = stdout;

  console.log(output);  //Let us log the output for development purposes.
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

$('#btnSubmit').click(function(){
  child = exec(("nmcli d wifi connect '" + $('#user_ssid').val() + "' password " + "'" + $('#user_password').val() + "'") , function (error, stdout, stderr) {
    // sys.print('stdout: ' + stdout);
    // sys.print('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
    connection_output = stdout;

    console.log(connection_output);  //Let us log the output for development purposes.
    //TODO: We have to remove this in the production mode.
  });
});

let captchaFlag = false;
function beforesubmit(event) {
  if (captchaFlag) {
    let inputdate = document.querySelector(".inputdate");
    let outputdate = document.querySelector(".outputdate");
    console.log("1" + inputdate.value);
    let formatteddate = new Date(inputdate.value).toLocaleDateString("en-US");
    console.log(formatteddate);
    outputdate.value = formatteddate; //test
  }else{
    alert("Please chekc the recaptcha box to submit the form.");
    event.preventDefault();
  }
}

function timestamp() {
  var response = document.getElementById("g-recaptcha-response");
  if (response == null || response.value.trim() == "") {
    var elems = JSON.parse(
      document.getElementsByName("captcha_settings")[0].value
    );
    elems["ts"] = JSON.stringify(new Date().getTime());
    document.getElementsByName("captcha_settings")[0].value =
      JSON.stringify(elems);
  }
}
setInterval(timestamp, 500);

function captchaSuccess() {
  captchaFlag = true;
}

const verifyAnswer = () =>  {
  document.getElementById("1").disabled = false;
  document.getElementById("2").disabled = false;
  document.getElementById("3").disabled = false;
  const dev = document.getElementById("myCheck").checked;
  if (dev == true) {
//enable all the radio button
    document.getElementById("1").disabled = true;
    document.getElementById("2").disabled = true;
    document.getElementById("3").disabled = true;
 }
}
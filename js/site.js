// get the user's message to reverse
function getValues() {

  // get the text input from the page
  let message = document.getElementById('userInput').value;

  // validate the input: make sure the input is not empty
  if (message.length == 0) {
    Swal.fire({
      icon: 'error',
      backdrop: false,
      text: 'Please enter a string to reverse'
    })
  } else {
    // pass the input to reverseMessage and assign its return value to a variable
    let revMsg = reverseMessage(message);

    // give the reversed message to displayMessage to show on the page
    displayMessage(revMsg);
  }

}

// reverse the string
function reverseMessage(input) {
  // return input.split('').reverse().join(''); // <--- Don't use this in an interview
  let output = '';
  
  for (let i = input.length - 1; i >= 0; i--) {
    output += input[i];
  }
  
  return output;
}

// display the reversed message
function displayMessage(message) {
  document.getElementById('msg').textContent = `Your message reversed is: ${message}`;
  document.getElementById('alert').classList.remove('invisible');
}
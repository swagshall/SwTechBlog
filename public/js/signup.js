const signupFormHandler = async function(event) {
  event.preventDefault();

  //create vars 
  const username = document.querySelector('#username-input-signup');
  const password = document.querySelector('#password-input-signup');

  //fetch for POST
  const response = await fetch('/api/user', {
    method: 'POST',
    body: JSON.stringify({
      username: username.value,
      password: password.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } 
  //alert if failed 
  else {
    alert('Failed to sign up');
  }
};

document
  .querySelector('#signup-form')
  //on submit got to signupform handler 
  .addEventListener('submit', signupFormHandler);

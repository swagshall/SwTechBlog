const loginFormHandler = async function(event) {
  event.preventDefault();

  //vars
  const username = document.querySelector('#username-input-login');
  const password = document.querySelector('#password-input-login');

  //fetch using POST
  const response = await fetch('/api/user/login', {
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
  // alert if failed 
  else {
    alert('Failed to login');
  }
};

document
  .querySelector('#login-form')
  //on submit go to login form handler 
  .addEventListener('submit', loginFormHandler);

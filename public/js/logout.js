const logout = async function() {

  //fetch for post 
  const response = await fetch('/api/user/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } 
  //Alert if failed 
  else {
    alert('Failed to log out');
  }
};

document.querySelector('#logout-link').addEventListener('click', logout); //on click logout

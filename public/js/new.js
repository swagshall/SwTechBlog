const newFormHandler = async function(event) {
  event.preventDefault();

  //create vars 
  const title = document.querySelector('input[name="post-title"]').value;
  const body = document.querySelector('textarea[name="post-body"]').value;

  //fecth for POST
  await fetch(`/api/post`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      body,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  //move to dashboard
  document.location.replace('/dashboard');
};

document
  .querySelector('#new-post-form')
  //on submit got to new form handler 
  .addEventListener('submit', newFormHandler);

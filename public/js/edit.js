//create vars
const Id = document.querySelector('input[name="post-id"]').value;

const editFormHandler = async function(event) {
  event.preventDefault();

  //create vars 
  const title = document.querySelector('input[name="post-title"]').value;
  const body = document.querySelector('textarea[name="post-body"]').value;

  //create fetch for PUT
  await fetch(`/api/post/${Id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      body
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  document.location.replace('/dashboard');
};

const deleteClickHandler = async function() {
  //fetch using DELETE
  await fetch(`/api/post/${Id}`, {
    method: 'DELETE'
  });

  document.location.replace('/dashboard');
};

document
  .querySelector('#edit-post-form')
  //on submit edit post 
  .addEventListener('submit', editFormHandler);
document
  .querySelector('#delete-btn')
  //on delete delete post 
  .addEventListener('click', deleteClickHandler);

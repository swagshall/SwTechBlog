const commentFormHandler = async function(event) {
  event.preventDefault();

  //create vars 
  const Id = document.querySelector('input[name="post-id"]').value;
  const body = document.querySelector('textarea[name="comment-body"]').value;

  if (body) {
    //fetch using POST 
    await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({
        Id,
        body
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    document.location.reload();
  }
};

document
  .querySelector('#new-comment-form')
  //om submit comment form handler 
  .addEventListener('submit', commentFormHandler);

async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="item-title"]').value;
  const item_img = document.querySelector('input[name="item-img"]').value;
  const item_description = document.querySelector('input[name="description"]').value;

  const loadFile = function(event) {
    let image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
  };

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      item_description,
      item_img
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/your-stuff');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-item-form').addEventListener('submit', newFormHandler);
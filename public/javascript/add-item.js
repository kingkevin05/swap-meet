async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="item-title"]').value;
  // const image_url = document.querySelector('input[name="image-url"]').value;
  const item_description = document.querySelector('input[name="description"]').value;


  const response = await fetch(`/api/items`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      item_description,
      // image_url
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
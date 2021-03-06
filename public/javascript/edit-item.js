async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="item-title"]').value.trim();
  const item_description = document.querySelector("#description").value.trim();
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/items/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      item_description
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/your-stuff/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('#edit-item-form').addEventListener('submit', editFormHandler);
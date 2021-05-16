async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="item-title"]').value;
  const item_description = document.querySelector('input[name="description"]').value;
  const image_url = document.getElementById("output")

  const response = await fetch(`/api/items`, {
    method: "POST",
    body: JSON.stringify({
      title,
      item_description,
      image_url,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/your-stuff");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".new-item-form")
  .addEventListener("submit", newFormHandler);

var loadFile = function (event) {
  var image = document.getElementById("output");
  image.src = URL.createObjectURL(event.target.files[0]);
};

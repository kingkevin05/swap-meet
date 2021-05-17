async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="item-title"]').value;
  const item_description = document.querySelector("#description").value;
  // const image_url = document.querySelector(".preview-images").children[0].getAttribute("src");
  const image_url = document.querySelector("#output").getAttribute("src");
  console.log (image_url);

  const response = await fetch(`/api/items`, {
    method: "POST",
    body: JSON.stringify({
      title,
      item_description,
      image_url
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
// $(document).ready(function () {
//   let imagesPreview = function (input, placeToInsertImagePreview) {
//     if (input.files) {
//       let filesAmount = input.files.length;
//       for (i = 0; i < filesAmount; i++) {
//         let reader = new FileReader();
//         reader.onload = function (event) {
//           $($.parseHTML("<img>"))
//             .attr("src", event.target.result)
//             .appendTo(placeToInsertImagePreview);
//         };
//         reader.readAsDataURL(input.files[i]);
//       }
//     }
//   };
//   $("#input-files").on("change", function () {
//     imagesPreview(this, "div.preview-images");
//   });
// });





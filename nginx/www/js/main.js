(function () {
  fetch(`/srv/python`, {
    method: "GET",
  }).then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    return null;
  }).then((json) => {
    const data = json?.data
      ? `${json?.data}`
      : "Invalid JSON data";
    const body = document.querySelector("body");
    body.innerHTML = `<p>${data}</p>`;
  });
})();


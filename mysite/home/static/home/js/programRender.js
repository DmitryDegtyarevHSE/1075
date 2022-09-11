document.addEventListener('DOMContentLoaded', async function () {
    const params = new URLSearchParams(window.location.search).get('id');
    await fetch("http://dfvrn.pythonanywhere.com/api/programs?id=" + params, {method: 'GET'})
        .then((res) => res.json())
        .then((data) => {
            document.getElementById('title').innerText = data.title;
            document.getElementById('caption').innerText = data.caption;
            document.getElementById('description').innerText = data.description;
            document.getElementById('bgcImg').style.backgroundImage = "url(" + data.imageUrl + ")";
        });
});


var changeContent = async (page) => {
    var loader = document.getElementById('loader');
    var loaderDiv = document.getElementById('loaderDiv');
    loaderDiv.hidden = false;
    loader.style = "width: 30%";
    var page = await fetch(page);
    loader.style = "width: 50%";
    if (page.status == 200) {
        document.getElementById("root").innerHTML = await page.text();
    } else {
        document.getElementById("root").innerHTML = "Something went wrong.";
    }
    loader.style = "width: 100%";
    loaderDiv.hidden = true;
}

$(document).ready(function () {
    $("root").on("load", changeContent('home.html'));
});
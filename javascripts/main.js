var changeContent = async (page) => {
    var page = await fetch(page);
    // console.log(await page.text());
    document.getElementById("root").innerHTML = await page.text();
}

$(document).ready(function () {
    $("root").on("load", changeContent('home.html'));
});
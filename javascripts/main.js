var changeContent = async (file) => {
    var loader = document.getElementById('loader');
    var loaderDiv = document.getElementById('loaderDiv');
    loaderDiv.hidden = false;
    // loader.style = "width: 30%";
    var page = await fetch(file);
    // loader.style = "width: 50%";
    if (page.status == 200) {
        document.getElementById("root").innerHTML = await page.text();
        if (file === 'team.html')
            loadTeam();
    } else {
        document.getElementById("root").innerHTML = "Something went wrong.";
    }
    loader.style = "width: 100%";
    loaderDiv.hidden = true;
}


$(document).ready(function () {
    $("root").on("load", changeContent('home.html'));
});

// $(document).ready(function () {
//     $("rightSidebar").on("load", loadSidebar());
// });

// var loadSidebar = async () => {
//     var page = await fetch("right-sidebar.html");
//     if (page.status == 200) {
//         document.getElementById("rightSidebar").innerHTML = await page.text();
//     } else {
//         document.getElementById("rightSidebar").innerHTML = "Something went wrong.";
//     }
// }

var loadFooter = async () => {
    var page = await fetch("footer.html");
    if (page.status == 200) {
        document.getElementById("footer").innerHTML = await page.text();
    } else {
        document.getElementById("footer").innerHTML = "Something went wrong.";
    }
}

var loadTeam = async () => {
    var teamResponse = await fetch("data/team.json");
    var team = JSON.parse(await teamResponse.text());
    var view = "";
    team.forEach((element) => view += teamCard(element));
    document.getElementById("team").innerHTML = view;
}

var teamCard = (member) => {
    var card = "<div class=\"col-lg-4 col-md-12 col-sm-12 col-12\">"
    + "<div class=\"card\" style=\"width: 18rem;\">"
        + "<div class=\"card-header\">" + member['name'] + "</div>"
        + "<div class=\"card-body\">"
        + "<img class=\"card-img-top\" src=\"" + member['image-url'] + "\" style=\"width:220px;height:250px;margin:auto;\">"
        + "<div class=\"card-title\">"+member["position"]+"</div>"
        + "</div>"
        + "</div>"
        + "</div>";
    console.log(card);
    return card;
}
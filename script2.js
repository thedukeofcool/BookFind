let url = location.href;
let bookName = url.substr(url.lastIndexOf("?name=")+6);
bookName = bookName.replaceAll('%20', ' ');
bookName = bookName.replaceAll('%22', '\"');
bookName = bookName.replaceAll('%27', "\'")
document.getElementById("search").value = bookName;

var database = ["Dog Man: Unleased", "Dog Man: A Tale of Two Kittens", "Dog Man: Lord Of the Fleas", "Dog Man: Brawl of the Wild", "Dog man: For Whom the Ball Rolls", "Dog Man: Fetch-22", "Dog Man: Grime and Punishment"];

function addText(text, link)
{
    var r2 = document.createElement("A");
    var r = document.createElement("P");
    r.textContent = text;
    r2.href = link;
    r2.appendChild(r);
    document.getElementById("results").appendChild(r2);
}

if (bookName == "Dog Man")
{
    for (let i = 0; i < 6; i++)
    {
        addText(database[i], "https://google.com");
    }
}

function findBook() {
    window.location.href = "search.html?name=" + document.getElementById("search").value
}

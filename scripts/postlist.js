function removeCard(card) {
    const delCard = document.getElementById(card);
    delCard.parentNode.removeChild(delCard);
}

function openPost(author, heading, content) {
    const url = `../html/post.html?heading=${encodeURIComponent(heading.innerText)}&author=${encodeURIComponent(
            author.innerText
    )}&content=${encodeURIComponent(content.innerText)}`;
    window.location.href = url;
}

var req = new XMLHttpRequest();

req.onload = function() {
    document.getElementById('header').innerHTML = this.responseText;
}

req.open("get", "header.html", true);
req.send();
// Get ele by Id
document.getElementById("id001").style.color = "orange"

//Get ele by Class
var eleClass = document.getElementsByClassName("text");

for(var i = 0; i < eleClass.length ; i++) {
    if(i % 2 === 0) {
        eleClass[i].style.fontWeight = "bold"
    } else {
        eleClass[i].style.fontWeight = 500
    }
}

// Change href
document.getElementsByClassName('show-href-change')[0].innerHTML = "Nothing change: " + document.getElementsByClassName('tag001')[0].attributes.href.value;

document.getElementsByClassName('tag001')[0].addEventListener('click', function(event) {
    var $this = document.getElementsByClassName('tag001')[0];
    var result = document.getElementsByClassName('show-href-change')[0];
    $this.attributes.href.value = "http://google.com.vn";
    result.innerHTML = "Href changed: " + $this.attributes.href.value;
})

// Change src
document.getElementsByClassName('tag002')[0].addEventListener('click', function(event) {
    event.preventDefault();
    var $this = document.getElementsByClassName('img001')[0];
    $this.attributes.src.value = "https://via.placeholder.com/150";
    $this.attributes.alt.value = "150x150";
})

// Get node by Class
// Get parent node 
var parentNode = document.getElementsByClassName('item001')[0].parentNode;
parentNode.style.backgroundColor = "green";

// Get child node
parentNode.childNodes[1].style.backgroundColor = "orange"

// Get next child node

var root = document.getElementsByClassName('list002')[0];

//first child
root.firstElementChild.style.color = "blue";

//last child
root.lastElementChild.style.color = "red";

// next child
root.firstElementChild.nextElementSibling.style.color = "#fff";

// prev child
root.lastElementChild.previousElementSibling.style.color = "#ccc";

// another child

root.children[2].style.color = "green"


// Get node by Id
// Get parent by Id 
var parentNodeId = document.getElementById('list002').parentNode;
parentNodeId.style.backgroundColor = "green";

// Get child by Id
var childNodeId = document.getElementById('list002').children;
for(var i = 0; i< childNodeId.length; i++) {
    if(i % 2 === 0) {
        childNodeId[i].style.color = "orange"
    } else {
        childNodeId[i].style.color = "#ccc"
    }
}


// Get next child node

var root = document.getElementById('list002');

//first child
root.firstElementChild.style.color = "blue";

//last child
root.lastElementChild.style.color = "red";

// next child
root.firstElementChild.nextElementSibling.style.color = "#fff";

// prev child
root.lastElementChild.previousElementSibling.style.color = "#ccc";

// another child

root.children[2].style.color = "black"
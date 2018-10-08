function addPicture() {
    var elem = document.getElementById('p-element').appendChild(document.createElement('img'));
    elem.src = './images/photo-236047.jpeg';
    elem.height = 100;
    elem.width = 100;
    elem.onmousemove = function () {
        (this.height < 200)? ++this.height : null;
        (this.width < 200)? ++this.width : null;
    }
    elem.onclick = function () {
        this.remove()
    }
}

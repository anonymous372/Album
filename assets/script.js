const reader1 = new FileReader();
const reader2 = new FileReader();

// PHOTO JS
const PHOTO_HEIGHT  = "300px"
var photoCont =  document.getElementById("photo-cont")

var fileSelectorPhoto = document.createElement('input');
fileSelectorPhoto.setAttribute('type', 'file');
fileSelectorPhoto.setAttribute('accept', 'image/*');

var btnPhoto = document.getElementById("up-photo")
btnPhoto.onclick = () => {
    var file = fileSelectorPhoto.click()
}

fileSelectorPhoto.addEventListener("change", e => {
    var file = e.target.files[0]
    reader1.readAsDataURL(file);
})

reader1.onload = e => {
    const src = e.target.result; 
    createNewPhoto(src)
}

function createNewPhoto(src){
    var newDiv = document.createElement("div")
    newDiv.classList.add("photo-frm")
    var img = document.createElement("img")
    img.setAttribute("src", src)
    img.classList.add("img-thumbnail")
    img.style.height = PHOTO_HEIGHT

    newDiv.appendChild(img)
    photoCont.appendChild(newDiv)
}

// VIDEO JS

const VIDEO_HEIGHT  = "300"
var videoCont =  document.getElementById("video-cont")

var fileSelectorVideo = document.createElement('input');
fileSelectorVideo.setAttribute('type', 'file');
fileSelectorVideo.setAttribute('accept', 'video/*');

var btnVideo = document.getElementById("up-video")
btnVideo.onclick = () => {
    console.log("Clicked buttonV")
    var file = fileSelectorVideo.click()
}

fileSelectorVideo.addEventListener("change", e => {
    var file = e.target.files[0]
    reader2.readAsDataURL(file);
})

reader2.onload = e => {
    const src = e.target.result; 
    createNewVideo(src)
}

function createNewVideo(src){
    var newDiv = document.createElement("div")
    newDiv.classList.add("video-frm")

    var vid = document.createElement("video")
    // vid.classList.add("img-thumbnail")
    vid.setAttribute("height",VIDEO_HEIGHT)
    vid.setAttribute("controls","")
    
    var source = document.createElement("source")
    source.setAttribute("src", src)
    source.setAttribute("type", "video/mp4")
    
    vid.appendChild(source)
    newDiv.appendChild(vid)
    videoCont.appendChild(newDiv)
}
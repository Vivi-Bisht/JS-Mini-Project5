var arr = [
    {dp: "Assets/thomas.jpg" , story: "Assets/thomas-story.gif"},
    {dp: "Assets/mam.jpeg" , story: "Assets/mam-story.jpg"},
    {dp: "Assets/bruce.jpg" , story: "Assets/bruce-story.gif"},
    {dp: "Assets/chris.jpg" , story: "Assets/chris-story.gif"},
];

var clutter = ""

arr.forEach(function(elem,idx){
    clutter += `<div class="story">
        <img id="${idx}"  src="${elem.dp}" alt="">
            </div>`
})

document.querySelector("#storiyan").innerHTML = clutter

document.querySelector("#storiyan").addEventListener("click" , function(dets){
     document.querySelector("#full-screen").style.display = "block";
     document.querySelector("#full-screen").style.backgroundImage = 
        `url(${arr[dets.target.id].story})`;

        setTimeout(function(){
            document.querySelector("#full-screen").style.display = "none";
        },2000)
});
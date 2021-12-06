function postBlog() {
    var post = document.getElementById("newpost").value
    var para = document.createElement("P");

    para.innerText = post;
    document.body.appendChild(para);
    
    document.getElementById("newpost").value = "";
}
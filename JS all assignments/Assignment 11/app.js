function PublishPost() {
    console.log("PublishPost function called");
    const username = document.getElementById("Username_input").value.trim();
    const postText = document.getElementById("UserPost_input").value.trim();

    if (username === "" && postText === "") return;

    const now = new Date();
    const time = now.toLocaleTimeString();

    const newPost = document.createElement("div");
    newPost.classList.add("post");
    newPost.innerHTML = `
        <div class="user-icon" style="background-color: pink;"></div>
        <div class="post-content">
            <p class="username">${username}</p>
            <p class="timestamp">${time}</p>
            <p class="post-text">${postText}</p>
            <div class="interaction-icons">
                <i class="fa-regular fa-heart" onclick="toggleHeart(this)"></i>
                <i class="fa-solid fa-comment"></i>
            </div>
        </div>
    `;

    document.getElementById("posts_container").appendChild(newPost);

    document.getElementById("Username_input").value = "";
    document.getElementById("UserPost_input").value = "";
}

function toggleHeart(icon) {
    if(icon.classList.contains('fa-regular')) {
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid');
        icon.style.color = '#ff0026';
    } else {
        icon.classList.remove('fa-solid');
        icon.classList.add('fa-regular');
        icon.style.color = '';
    }
}
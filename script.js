class Post {
    constructor(title, paragraph) {
        this.title = title;
        this.paragraph = paragraph;
    }
    createTitle() {
        let title = document.createElement("h2");
        title.innerHTML = this.title;
        return title;
    }
    createP() {
        let paragraph = document.createElement("p");
        paragraph.innerHTML = this.paragraph;
        return paragraph;
    }
    createPost() {
        let newPost = document.createElement("div");
        newPost.classList.add("post")
        newPost.append(this.createTitle());
        newPost.append(this.createP());
        document.querySelector(".postSection").append(newPost);
    }
}
for(let i = 0; i < 50; i++) {
    new Post("Title", "paragraph paragraph").createPost();
}

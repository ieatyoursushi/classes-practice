class Post {
    constructor(title, paragraph, color) {
        this.title = title;
        this.paragraph = paragraph;
        this.color = color;
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
        newPost.style.color = this.color;
        document.querySelector(".postSection").append(newPost);
    }
}
export {Post};

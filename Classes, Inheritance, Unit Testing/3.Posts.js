function result() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        };
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let result = super.toString() + "\n";
            result += `Rating: ${this.likes - this.dislikes}\n`;
            if (this.comments.length > 0) {
                result += `Comments:\n`;
                for (let comment of this.comments) {
                    result += ` * ${comment}\n`;
                }
            }
            return result.trim();
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            let result = super.toString() + "\n";
            result += `Views: ${this.views}`;
            return result.trim();
        }
    }

    return {Post, BlogPost, SocialMediaPost};
}

let post = new Post("Post", "Content");
console.log(post.toString());

let scm = new SocialMediaPost("TestTitle", "TestContent", 25, 30);
scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

let blogPost = new BlogPost("Post", "Content", 0);
blogPost.view().view().view();
console.log(blogPost.toString());
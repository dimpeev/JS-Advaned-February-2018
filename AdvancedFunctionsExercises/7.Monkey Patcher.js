let post = {
    id: "3",
    author: "emil",
    content: "wazaaaaa",
    upvotes: 4,
    downvotes: 5
};

function solution(action) {
    let p = this;
    let commands = {
        upvote: () => {
            p.upvotes++;
        },
        downvote: () => {
            p.downvotes++;
        },
        score: () => {
            let votesToBeAdded = 0;
            if ((p.upvotes + p.downvotes) > 50) {
                votesToBeAdded = Math.ceil(0.25 * Math.max(p.upvotes, p.downvotes));
            }
            if (p.upvotes + p.downvotes < 10) {
                rating = "new";
            }
            else {
                if ((p.upvotes / (p.upvotes + p.downvotes)) > 0.66) {
                    rating = "hot";
                }
                else if (p.upvotes > 100 && p.upvotes >= p.downvotes) {
                    rating = "controversial";
                }
                else if (p.upvotes - p.downvotes < 0) {
                    rating = "unpopular";
                }
                else {
                    rating = "new";
                }
            }

            return [p.upvotes + votesToBeAdded, p.downvotes + votesToBeAdded, p.upvotes - p.downvotes, rating];
        }
    };

    return commands[action]();
}

console.log(solution.call(post, "score"));
solution.call(post, "downvote");
console.log(solution.call(post, "score"));
solution.call(post, "upvote");
solution.call(post, "upvote");
console.log(solution.call(post, "score"));
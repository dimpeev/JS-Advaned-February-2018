function sortRectangles(input) {
    let rectangles = [];
    for (let i = 0; i < input.length; i++) {
        rectangles.push({
            width: input[i][0],
            height: input[i][1],
            area: function () {
                return this.width * this.height;
            },
            compareTo: function (other) {
                let diff = other.area() - this.area();
                return diff !== 0 ? diff : other.width - this.width;
            }
        });
    }

    return rectangles.sort((a, b) => a.compareTo(b));
}

sortRectangles([[10, 5], [3, 20], [5, 12]]);
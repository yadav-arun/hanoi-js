module.exports = {
    hanoi: function hanoi(height, left, right, middle) {
        if (height > 0) {
            hanoi(height - 1, left, middle, right);
            right.push(left.pop());
            console.log(left, middle, right);
            hanoi(height - 1, middle, right, left);
        }
    }
}
"use strict"

function PostES5(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

PostES5.prototype.edit = function(text) {
    this.text = text;
}

function AttachedPostES5(author, text, date) {
    PostES5.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPostES5.prototype = Object.create(PostES5.prototype);
AttachedPostES5.prototype.constructor = AttachedPostES5;

AttachedPostES5.prototype.makeTextHighlighted = function() {
    this.highlighted = true;
}

let postES5 = new PostES5('Генадий', 'вошел в чат', new Date());
console.log(postES5);
postES5.edit('вышел из чата');
console.log(postES5);

let attachedES5 = new AttachedPostES5('Толстой', 'Война и мир', new Date());
console.log(attachedES5);
attachedES5.edit('Анна Каренина');
attachedES5.makeTextHighlighted();
console.log(attachedES5);
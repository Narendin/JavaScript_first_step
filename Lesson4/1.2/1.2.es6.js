"use strict"

class PostES6 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    }
}

class AttachedPostES6 extends PostES6 {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

let postES6 = new PostES6('Михаил', 'вошел в чат', new Date());
console.log(postES6);
postES6.edit('вышел из чата');
console.log(postES6);

let attachedES6 = new AttachedPostES6('Булгаков', 'Дьяволиада', new Date());
console.log(attachedES6);
attachedES6.edit('Зойкина квартира');
attachedES6.makeTextHighlighted();
console.log(attachedES6);
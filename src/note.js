class Note {
  constructor(title, content) {
    this.title = title;
    this.content = content;
  }
  get getTitle() {
    return this.title;
  }

  get getContent() {
    return this.content;
  }
}
module.exports = Note;

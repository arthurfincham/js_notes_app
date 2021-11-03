class Notes {
  constructor() {
    this.storage = [];
  }
  add(note){
    this.storage.push(note);
  }
  all(){
    return this.storage;
  }
}

module.exports = Notes;
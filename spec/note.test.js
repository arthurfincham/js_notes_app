const Note = require('../src/note');

const note = new Note('new title', 'new content');

describe('note', () => {
  test('have a title',() => {
    expect(note.getTitle).toEqual('new title');
  })

  test('have content',() => {
    expect(note.getContent).toEqual('new content');
  })
})

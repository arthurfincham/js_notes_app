const Notes = require('../src/notes')

const notes = new Notes();
const mockNote = { title: 'Test Note', content: 'This is a mock note.'}

describe('Notes', () => {
  test('it can add a note to its storage', () => {
    notes.add(mockNote);
    expect(notes.all()).toContain(mockNote);
  });

  test('returns an array', () => {
    notes.add(mockNote);
    expect(notes.all()).toBeInstanceOf(Array);
  });
});

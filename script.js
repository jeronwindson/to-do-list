const List = {
    theNote: [
        {
          id: 1,
          name: 'academia',
          content: 'treinar'
        }
    ]
  };
  
  function addNote(date) {
    List.theNote.push({
      id: List.theNote.length +1,
      name: date.name,
      content: date.content
    });
  }
  
  function takeNote() {
  return List.theNote;
  }
  
  function updateNote(id, newContent) {
  const contentForUp = takeNote().find((theNote) => {
    return theNote.id === id; });
  console.log(contentForUp)
  contentForUp.content = newContent
  };
  
  
  updateNote(1, 'galho')
  console.log(takeNote());
  addNote({id: 2, name: 'padaria', content: 'pao'});
  
  takeNote();
  console.log(takeNote());
  
  
  function deletNote(id) {
  posNote = takeNote().filter((postAtual) => {
    return postAtual.id !==id;
  })
  console.log(posNote);
  }
  
  deletNote(2);
  takeNote();
const buttonNewEdit = (ExistingDraft) => {
  if (ExistingDraft) {
    return 'Edit draft'
  }
  else {
    return 'New assessment'
  }
};

export default buttonNewEdit;

const buttonType = (ExistingDraft) => {
    if (ExistingDraft) {
        return 'Edit draft'
    }
    else {
        return 'New assessment'
    }
};

export default buttonType;

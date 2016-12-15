const currentDate = new Date();
const currentMonth = currentDate.getMonth() + 1;

export const isAssessmentInMonth = (assessmentMonth) => {
    const diff = assessmentMonth - currentMonth;
    return [0, 1, -11].includes(diff);
};



const currentDate = new Date();
const currentMonth = currentDate.getMonth() + 1;


const getAssMonthIcon = (AssessmentMonth) => {
    let countYear = 0;
    if(currentMonth === 12){
        countYear = 12;
    }
    let monthDifference = currentMonth - AssessmentMonth - countYear;
    if(monthDifference === -1){
        return 'clock-o';
    }
    else{
        return '';
    }
};

export const isAssessmentInMonth = (assessmentMonth) => {
    const diff = assessmentMonth - currentMonth;
    return diff == 1 || diff == 0;
};



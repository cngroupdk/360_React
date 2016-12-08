const monthRender = (month) => {
    return [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ][month - 1] || 'None listed';
};

export default monthRender;
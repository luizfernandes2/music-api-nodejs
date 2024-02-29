module.exports = {
    note: (note) => {
        switch (note) {
            case 'C':
            case 'D':
            case 'E':
            case 'F':
            case 'G':
            case 'A':
            case 'B':
                return note;
            default:
                return null;
        }
    },
}
module.exports = {
    nameNote: (name) => {
        let nameNote = `${name}`.toUpperCase().trim();
        
        switch (nameNote) {
            case 'DO':
            case 'RE':
            case 'MI':
            case 'FA':
            case 'SOL':
            case 'LA':
            case 'SI':
                return nameNote;
            default:
                return null;
        }
    },

    note: (data) => {
        let note = `${data}`.toUpperCase().trim();

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
    }
}
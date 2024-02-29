const removeAccents = require('remove-accents');

const MAPPING = {
    'C': 'C',
    'D': 'D',
    'E': 'E',
    'F': 'F',
    'G': 'G',
    'A': 'A',
    'B': 'B',
    'DO': 'C',
    'RE': 'D',
    'MI': 'E',
    'FA': 'F',
    'SOL': 'G',
    'LA': 'A',
    'SI': 'B'
};

module.exports = {
    nameNote: (name) => {
        let nameNote = `${removeAccents.remove(name)}`.toUpperCase().trim();
        
        let parserNote = MAPPING[nameNote];
        
        if (parserNote) {
            return parserNote;
        } else {
            return null;
        }
    }

    // note: (data) => {
    //     let note = `${data}`.toUpperCase().trim();

    //     switch (note) {
    //         case 'C':
    //         case 'D':
    //         case 'E':
    //         case 'F':
    //         case 'G':
    //         case 'A':
    //         case 'B':
    //             return note;
    //         default:
    //             return null;
    //     }
    // }
}
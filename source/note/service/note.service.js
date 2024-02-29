function majorScale(nota) {
    let scale = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];;

    let index = scale.indexOf(nota);

    let seq = scale.slice(index).concat(scale.slice(0, index));

    return seq;
}

module.exports = {
    async listScale(note){
        let scale = majorScale(note)

        return { scale: scale.join(', ') };
    },

    async listChord(){
        console.log("SERVICE LIST CHORD")

    },

    async listHarmonicField(){
        console.log("SERVICE LIST HARMONIC FIELD")
    }

}
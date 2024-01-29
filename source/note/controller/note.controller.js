const noteService = require("../service/note.service");

const fieldsParsingService = require("../../../validation/fieldsParsing.service")

module.exports = {
    async listScale(req, res, next){
        console.log("Scale")
        
        let service = await noteService.listScale()

        return service
    },

    async listChord(req, res, next){
        console.log("Chord")

        let service = await noteService.listChord()

        return service
    },

    async listHarmonicField(req, res, next){
        console.log("HarmonicField")

        let service = await noteService.listHarmonicField()

        return service
    },
}
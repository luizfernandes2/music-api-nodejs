const noteService = require("../service/note.service");
const responseFeedbackService = require("../../../request/responseFeedback.service")
const { end } = require("../../../request/requestDealer.service")
const fieldsParsingService = require("../../../validation/fieldsParsing.service")
const fieldsValidatorService = require("../../../validation/fieldsValidator.service")

module.exports = {
    async listScale(req, res, next){
        let note = fieldsParsingService.nameNote(req.body.note)
        
        if (note === null) {
            req.response.feedback = responseFeedbackService.newFeedback({ error: note });
            return end(req, res);
        }

        note = fieldsValidatorService.note(note)
        
        if (note === null) {
            req.response.feedback = responseFeedbackService.newFeedback({ action: responseFeedbackService.getActions().INVALID, field: 'note' });
            return end(req, res);
        }
        
        let scale = await noteService.listScale(note)
        
        if(scale.error){
            req.response.feedback = responseFeedbackService.newFeedback({ action: responseFeedbackService.getActions().INVALID, field: 'note' });
            return end(req, res);
        }

        req.response.feedback = responseFeedbackService.newFeedback({ action: responseFeedbackService.getActions().READ, field: 'scale' });
        req.response.body.scale = scale;

        return next();
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
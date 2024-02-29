const responseFeedbackService = require("../request/responseFeedback.service")

const SUPPORTED_CONTENT_TYPE = {
    JSON: 'application/json'
}

module.exports = {
    async init(req, res, next) {
        req.response = {
            feedback: {
                action: responseFeedbackService.getActions().VALIDATED,
                field: 'api-access'
            },
            meta: {
                contentType: SUPPORTED_CONTENT_TYPE.JSON,
                error: null,
            },
            header: { 
                status: 200 
            },
            body: {

            },
        }

        return next()
    },

    async end(req, res, next) {
        res.contentType(req.response.meta.contentType);

        if (req.response.meta.contentType !== SUPPORTED_CONTENT_TYPE.JSON)
            return res.end(req.response.body);

        req.response.header.feedback = req.response.feedback;
        
        res.status(parseInt(req.response.header.status));

        let responseObj = {
            header: req.response.header,
            body: req.response.body
        };

        console.log(">>> Resposta ");

        return res.json(responseObj);
    }
}
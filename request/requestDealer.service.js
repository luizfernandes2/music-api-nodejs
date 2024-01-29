module.exports = {
    async init(req, res, next) {
        req.response = {
            body: {},
            
            header: { status: 200, contentType: 'application/json' },
        }

        return next()
    },

    async end(req, res, next) {

        res.status(parseInt(req.response.header.status));

        console.log(">>> Resposta ");

        return res.json(req.response.body);
    }
}
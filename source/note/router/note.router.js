const method = require('express').Router();

const {
    init, end
} = require('../../../request/requestDealer.service')

const {
    listScale, listChord, listHarmonicField
} = require('../controller/note.controller')

method.post(`/scale`, init, listScale, end);

method.post(`/chord`, init, listChord, end);

method.post(`/hamonic-field`, init, listHarmonicField, end);

module.exports = method;
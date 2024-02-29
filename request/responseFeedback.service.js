const AVAILABLE_ACTIONS = {
    LISTED: 'listed',
    READ: 'read',
    UNAUTHORIZED: 'unauthorized',
    AUTHORIZED: 'authorized',
    MISSING: 'missing',
    VALIDATED: 'validated',
    INVALIDATED: 'invalidated',
    INVALID: 'invalid',

    AVAILABLE: 'available',
    UNAVAILABLE: 'unavailable',

    UNKNOWN: 'unknown'
}

const getActions = () => {
    return AVAILABLE_ACTIONS
}

const parseAction = (action) => {
    for (let key in AVAILABLE_ACTIONS)
        if (AVAILABLE_ACTIONS.hasOwnProperty(key) && AVAILABLE_ACTIONS[key] === action.toLowerCase())
            return AVAILABLE_ACTIONS[key];
    return AVAILABLE_ACTIONS.UNKNOWN;
}

const newFeedback = (options) => {
    if (options.error) {
        let msMapping = errorMappingService.mapError(options.error);

        if (msMapping)
            return msMapping;

    }
    
    if (options.action && options.field){
        return {
            action: parseAction(options.action),
            field: options.field.toString().toLowerCase()
        };
    }
    
    return { action: AVAILABLE_ACTIONS.UNKNOWN, field: JSON.stringify(options) };
}

module.exports = {
    getActions: getActions,
    newFeedback: newFeedback
}
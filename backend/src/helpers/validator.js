const messages = require('../config/messages.json');


const getMessage = (path) => {
    return messages[path] || null;
};

const getValidatorError = (error, messagePath) =>{
    if(!error) return null;

    const errorMessages = {};

    error.details.map( (detail) => {
        const message = detail.message;
        const type = detail.type;
        const key  =  detail.context.key;
        const path = `${messagePath}.${key}.${type}` ;

        const custonMessage = getMessage(path);
        if(!custonMessage){
            console.log('custon message not found: ', path);
        }
        errorMessages[key] = getMessage(path) || message;
    });
    
    return errorMessages;
};
module.exports = {getValidatorError, getMessage}
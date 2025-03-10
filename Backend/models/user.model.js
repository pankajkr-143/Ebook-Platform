const mongoss = require('mongoose');

const userSchema = new mongoss.Schema({ 
    name: {
        type: String,
        required: true
    },
    email: { 
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoss.model('User', userSchema);

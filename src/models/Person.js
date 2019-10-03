const { Schema, model } = require('mongoose');

const PersonSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  CPF: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  CEP: {
    type: String,
    required: true,
  },
  numero: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

module.exports = model('Person', PersonSchema);

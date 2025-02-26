const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {

    username: {
      type: String,
      minlength: 1,
      required: [true, 'User debe tener un username']
    },
    password: {
      type: String,
      minlength: 1,
      required: [true, 'User debe tener una contraseña']
    },
    email: {
      type: String,
      minlength: 1,
      required: [true, 'User debe tener un email']
    },

    image: {
      type: String,
      default: null

    },
    
  },
  {
    timestamps: { createdAt: 'fecha_creado', updatedAt: 'fecha_actualizado' },
    toJSON: { virtuals: true }
  }
);


module.exports = mongoose.model('user', userSchema);


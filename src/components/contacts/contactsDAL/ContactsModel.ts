import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema(
  {
    gender: {
      type: String,
      required: true,
    },
    name: {
      title: {
        type: String,
        required: true,
      },
      first: {
        type: String,
        required: true,
      },
      last: {
        type: String,
        required: true,
      },
    },
    email: {
      type: String,
      required: true,
    },
    location: {
      street: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
    },
    dob: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    picture: {
      large: {
        type: String,
        required: true,
      },
      medium: {
        type: String,
        required: true,
      },
      thumbnail: {
        type: String,
        required: true,
      },
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    updatedAt: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: true },
)

const ContactsModel = mongoose.model('Contact', contactSchema)

export default ContactsModel

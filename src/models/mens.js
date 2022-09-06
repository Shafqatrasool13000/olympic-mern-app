import mongoose from 'mongoose'; // Erase if already required

// Schema of the Mongo model
var menSchema = new mongoose.Schema({
    event: {
        type: String,
        default:"100m"
    },
    ranking: {
        type: Number,
        required: true,
        unique:true
    },
    name: {
        type: String,
        required: true,
        trim:true
    },
    dob: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    score: {
        type: Number,
        required: true,
    }
});

//Export the model
const MensRanking = mongoose.model('menRanking', menSchema);

export  {MensRanking}
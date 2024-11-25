


import mongoose from 'mongoose';
const { Schema } = mongoose;


const eventSchema = new Schema({
    title: string,
    description: string,
    startedTime: string,
    endTime: string,
    startDate: string,
    endDate: string,
    location: {
        lat: string,
        long: string,
    },
    adress: string,
    createdBy: { type: mongoose.Types.objectId, ref: "Users" },
    going: [{ type: mongoose.Types.objectId, ref: "Users" }],

});

export const eventModal = mongoose.model('Events', eventSchema);

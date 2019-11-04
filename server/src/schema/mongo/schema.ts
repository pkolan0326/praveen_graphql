/**
  * //Schema of Reservation model for collection in MongoDB
  * Created by Praveen
  */
import { Schema } from "mongoose";

export const ReservationSchema = new Schema({
  guest_name: {
    type: String
  },
  hotel_name: {
    type: String
  },
  arrival: {
    type: String
  },
  departure: {
    type: String
  }
}, {id: true});

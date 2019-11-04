/**
  * //Reservation model for collection in MongoDB
  * Created by Praveen
  */
import { model } from "mongoose";
import { ReservationSchema } from "../schema/mongo/schema";

export const ReservationModel = model("reservation", ReservationSchema);

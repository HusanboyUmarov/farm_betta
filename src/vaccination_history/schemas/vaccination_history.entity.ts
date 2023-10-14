import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type VaccinationHistoryDocument = HydratedDocument<VaccinationHistory>

@Schema()
export class VaccinationHistory {
    @Prop({})
    animal_id: string;

    @Prop()
    vaccine_type_id:string;
    @Prop()
    vaccinated_date:Date;
    @Prop()
    next_vaccianated_date:Date;
    @Prop({type:mongoose.Schema.Types.ObjectId ,  ref:'workers'},)
    worker_id: string;
}

export const VaccinationSchema = SchemaFactory.createForClass(VaccinationHistory)

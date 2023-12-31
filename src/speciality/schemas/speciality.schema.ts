import { Prop, SchemaFactory,Schema } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Worker } from "../../worker/schemas/worker.schem";
export type SpecialityDocument = HydratedDocument<Speciality>;
@Schema()
export class Speciality {
    @Prop({})
    title:string;

    @Prop()
    description:string;

    @Prop({type:[{type:mongoose.Schema.Types.ObjectId ,  ref:'Worker'}]},)
    workers:Worker[]
   
}
export const SpecialitySchema = SchemaFactory.createForClass(Speciality)

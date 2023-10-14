import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Speciality } from "../../speciality/schemas/speciality.schema";

export type WorkerDocument = HydratedDocument<Worker>
@Schema({versionKey:false})
export class Worker {
    @Prop({required:true})
    name:string;

    @Prop()
    age:number;

    @Prop()
    experience:number;

    @Prop({unique:true})
    phone_number:string;

    @Prop({unique:true})
    username:string;

    @Prop({type:mongoose.Schema.Types.ObjectId ,  ref:'Speciality'},)
    speciality_id: string;

    @Prop()
    description:string;
    @Prop({type:[{type:mongoose.Schema.Types.ObjectId ,  ref:'vaccination_history'}]},)
    workers:Worker[]
}

export const WorkerSchema = SchemaFactory.createForClass(Worker)

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type FeedingDocument = HydratedDocument<Feeding>
@Schema()
export class Feeding {
    @Prop()
    animal_id:string;
    @Prop()
    feeding_schedules:string;
    @Prop()
    dietary:string;
    @Prop()
    worker_id:string;
}

export const FeedingSchema = SchemaFactory.createForClass(Feeding)

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type MeetProductionDocument = HydratedDocument<MeetProduction>
@Schema()
export class MeetProduction {
    @Prop({})
    meet_yield:number;
    @Prop({})
    slaughter_date:Date;
    @Prop({})
    shearing_schedule:string;
    @Prop({})
    animal_id:string
}
export const MeetSchema = SchemaFactory.createForClass(MeetProduction)

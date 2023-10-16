import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type MilkProductionDocument = HydratedDocument<MilkProduction>
@Schema()
export class MilkProduction {
    @Prop({})
    milk_yeild:string;
    @Prop({})
    milk_schedule: string;
    @Prop({})
    milk_quality:string;
    @Prop({})
    animal_id:string;
}
export const MilkSchema = SchemaFactory.createForClass(MilkProduction)

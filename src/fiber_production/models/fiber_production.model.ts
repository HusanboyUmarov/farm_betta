import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type FiberProductionDocument = HydratedDocument<FiberProduction>
@Schema()
export class FiberProduction {
    @Prop({})
    fiber_yield: string;
    @Prop({})
    shearing_schedule:string;
    @Prop({})
    fiber_quality:string;
    @Prop({})
    animal_id:string;
}

export const FiberProductionSchema = SchemaFactory.createForClass(FiberProduction)

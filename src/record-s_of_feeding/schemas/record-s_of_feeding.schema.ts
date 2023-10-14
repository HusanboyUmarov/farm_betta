import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type RecordFeedingDocument = HydratedDocument<RecordSOfFeeding>
@Schema()
export class RecordSOfFeeding {
    @Prop()
    date:Date;
    @Prop()
    consumption:string;
    @Prop()
    feeding:string;
}

export const RecordFeedingSchema = SchemaFactory.createForClass(RecordSOfFeeding)

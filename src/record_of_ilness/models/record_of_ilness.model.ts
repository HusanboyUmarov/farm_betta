import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type RecordOfItemsDocument = HydratedDocument<RecordOfIlness>
export class RecordOfIlness {
    @Prop({})
    animal_id: string;
    @Prop({})
    ilness_type:string;
    @Prop({})
    date_disease:string;
    @Prop({})
    medicines:string;
    @Prop({})
    date_treatment:string;
    @Prop({})
    illness_photo:string;
    @Prop({})
    worker_id:string;
}

export const RecordSchema = SchemaFactory.createForClass(RecordOfIlness)

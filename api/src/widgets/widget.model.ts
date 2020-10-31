import * as Mongoose from 'mongoose';

export const WidgetSchema = new Mongoose.Schema({
  service: { type: String, required: true },
  name: { type: String, required: true },
  componentName: { type: String, required: true },
  description: { type: String, required: true },
  timer: { type: Number, required: true },
  params: { type: [Object], required: true }
});

export interface Widget extends Mongoose.Document {
  service: string;
  name: string;
  description: string;
  componentName: string;
  timer: number;
  params: [];
}

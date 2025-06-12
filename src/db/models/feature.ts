// import mongoose, { model, Schema } from 'mongoose'
// import { IStage, Ifeature } from '@/types/interfaces'

// const AlternativeScenarioSchema = new Schema<IStage>({
//   Name: {
//     type: String,
//     required: true
//   },
//   Description: {
//     type: String,
//     required: true
//   },
//   Expected_Result: {
//     type: [String],
//     required: true
//   }
// }, { _id: false })

// const FeatureSchema = new Schema<Ifeature>({
//   Name: {
//     type: String,
//     required: true
//   },
//   Description: {
//     type: String,
//     required: true
//   },
//   Goal: {
//     type: String,
//     required: true
//   },
//   Success_Condition: {
//     type: String,
//     required: true
//   },
//   Actors: {
//     type: [String],
//     required: true
//   },
//   Preconditions: {
//     type: [String],
//     required: true
//   },
//   Main_Flow_Steps: {
//     type: [String],
//     required: true
//   },
//   Postconditions: {
//     type: [String],
//     required: true
//   },
//   Alternative_Scenarios: {
//     type: [AlternativeScenarioSchema],
//     required: true
//   },
//   _id: {
//     type: Schema.Types.ObjectId,
//     ref: 'Project',
//     required: true
//   }

// }, {
//   timestamps: true
// })

// const Feature = mongoose.models.Feature ?? model<Ifeature>('feature', FeatureSchema)
// export default Feature
// @/db/models/feature.ts
// @/db/models/feature.ts
import mongoose, { Schema, model, Model } from 'mongoose'
import { Ifeature } from '@/types/interfaces'

const AlternativeScenarioSchema = new Schema({
  Name: { type: String, required: true },
  Description: { type: String, required: true },
  Expected_Result: { type: [String], required: true }
}, { _id: false })

const FeatureSchema = new Schema<Ifeature>({
  Name: { type: String, required: true },
  Description: { type: String, required: true },
  Goal: { type: String, required: true },
  Success_Condition: { type: String, required: true },
  Actors: { type: [String], required: true },
  Preconditions: { type: [String], required: true },
  Main_Flow_Steps: { type: [String], required: true },
  Postconditions: { type: [String], required: true },
  Alternative_Scenarios: { type: [AlternativeScenarioSchema], required: true },
  idProject: { type: Schema.Types.ObjectId, required: true }
}, { timestamps: true })
const Feature: Model<Ifeature> =
  ('Feature' in mongoose.models)
    ? (mongoose.models.Feature as Model<Ifeature>)
    : model<Ifeature>('Feature', FeatureSchema, 'feature')
export default Feature

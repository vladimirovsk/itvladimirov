import * as mongoose from 'mongoose';

export const ProjectSchema = new mongoose.Schema({
	title: String,
	ico: String,
	img: String,
	note:String,
});
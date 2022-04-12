import * as mongoose from 'mongoose';

export const ProjectSchema = new mongoose.Schema({
	title: {type: String, required: true},
	ico: {type: String, default: null},
	img: {type: String, default: null},
	note: {type: String, default: null},
});
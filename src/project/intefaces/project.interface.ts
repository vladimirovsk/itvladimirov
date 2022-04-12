import {Document} from 'mongoose';

export interface IProject extends Document{
	title: string,
	ico: string,
	img: string,
	note: string,
}
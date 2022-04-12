import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {IProject} from './intefaces/project.interface'
import {CreateProjectDto} from './dto/create-project.dto';

@Injectable()
export class ProjectService {
	constructor(
		@InjectModel('Project')
		private projectModel: Model<IProject>
	) {
	}

	async create(createUserDto:CreateProjectDto):Promise<IProject> {
		const createUser = new this.projectModel(createUserDto);
		return await createUser.save();
	}

	async find(id:string):Promise<IProject> {
		return await this.projectModel.findById(id).exec();
	}

	async findAll(): Promise<IProject[]> {
		return await this.projectModel.find().exec();
	}
}
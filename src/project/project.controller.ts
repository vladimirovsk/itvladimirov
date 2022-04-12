import {Body, Controller, Get, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import {ProjectService} from './project.service';
import {CreateProjectDto} from './dto/create-project.dto';

@Controller('project')
export class ProjectController {
	constructor(
		private projectService:ProjectService
	) {
	}

	@UsePipes(new ValidationPipe())
	@Post('create')
	async createProject(@Body() createProjectDto: CreateProjectDto){
			return await this.projectService.create(createProjectDto)
	}


}
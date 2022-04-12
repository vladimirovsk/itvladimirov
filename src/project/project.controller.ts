import {
	BadRequestException,
	Body,
	Controller,
	Delete,
	Get, HttpCode, HttpStatus,
	Param,
	ParseIntPipe,
	Post, Put,
	Query,
	UsePipes,
	ValidationPipe
} from '@nestjs/common';
import {ProjectService} from './project.service';
import {CreateProjectDto} from './dto/create-project.dto';

@Controller('project')
export class ProjectController {
	constructor(
		private projectService:ProjectService
	) {
	}
	@HttpCode(HttpStatus.OK)
	@UsePipes(new ValidationPipe())
	@Post('/')
	async createProject(@Body() createProjectDto: CreateProjectDto){
			return await this.projectService.create(createProjectDto)
	}

	@HttpCode(HttpStatus.OK)
	@Delete('/:id')
	async deleteProject(@Param('id') id: string){
		return await this.projectService.delete(id).catch(err=>{
			throw new BadRequestException('Bad request', err.message);
		});
	}

	@HttpCode(HttpStatus.OK)
	@UsePipes(new ValidationPipe())
	@Put('/:id')
	async update(@Param('id') id:string, @Body() createProjectDto:CreateProjectDto){
		return await this.projectService.update(id, createProjectDto);
	}

	@HttpCode(HttpStatus.OK)
	@Get('/')
	async getAllProject(){
		return await this.projectService.findAll();
	}

	@HttpCode(HttpStatus.OK)
	@Get('/:id')
	async getProjectById(@Param('id') id: string){
		return await this.projectService.find(id).catch(err=>{
			throw new BadRequestException('Bad request', err.message);
		});
	}




}
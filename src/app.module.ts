import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {LoggerMiddleware} from './middleware/logger.middleware';
import {ConfigModule} from '@nestjs/config';
import {MongooseModule} from '@nestjs/mongoose';
import {ProjectModule} from './project/project.module';

const environment = process.env.NODE_ENV || 'develop'

@Module({
	imports: [
		ProjectModule,
		ConfigModule.forRoot({
			envFilePath: `.env.${environment}`,
			isGlobal: true
		}),
		MongooseModule.forRoot(
			process.env.MONGO_CONNECTION as string,
			{
				useNewUrlParser: true,
				useUnifiedTopology: true
			}
		)
	],
	controllers: [AppController],
	providers: [AppService],
})

export class AppModule implements NestModule {


	configure(consumer: MiddlewareConsumer): any {
		consumer
			.apply(LoggerMiddleware)
			.forRoutes('*')
	}
}

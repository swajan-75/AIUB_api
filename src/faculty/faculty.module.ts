import { Module } from '@nestjs/common';
import { FacultyService } from './faculty.service';
import { FacultyController } from './faculty.controller';
import { ScraperModule } from 'src/scraper/scraper/scraper.module';

@Module({
  providers: [FacultyService],
  controllers: [FacultyController],
  imports: [ScraperModule],
})
export class FacultyModule {}

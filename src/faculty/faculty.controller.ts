import { Controller, Get } from '@nestjs/common';
import { ScraperService } from 'src/scraper/scraper/scraper.service';

@Controller('faculty')
export class FacultyController {
    constructor(private readonly scraperService : ScraperService){}

    @Get('all')
    async get_all_faculty() {
        return await this.scraperService.get_all_faculties();
    }
}

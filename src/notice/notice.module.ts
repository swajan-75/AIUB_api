import { Module } from "@nestjs/common";
import { NoticeController } from "./notice.controller";
import { NoticeService } from "./notice.service";
import { ScraperModule } from "src/scraper/scraper/scraper.module";
@Module({
    controllers: [NoticeController],
    providers: [NoticeService],

    imports: [ScraperModule],

})
export class NoticeModule {}
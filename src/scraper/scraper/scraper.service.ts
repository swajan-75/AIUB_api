import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as cheerio from 'cheerio';


@Injectable()
export class ScraperService {
    getHello(): string {
        return 'Hello from Scraper Service!';
    }
    base_url ="https://www.aiub.edu/"
    //notice_page_number =1;
    //number_of_notices = 10;

    async get_notices(notice_page_number: number =1, number_of_notices : number =10){
        // defult notice return
        const url = this.base_url+"category/notices?pageNo="+notice_page_number+"&pageSize="+number_of_notices;
        const data = await axios.get(url);

        const $ = cheerio.load(data.data);
        const notices : any[] = [];
        $('.notification').each((i, elem) => {
            const date = $(elem).find('.date-custom').text().trim().split(/\s+/)[0];
            const month = $(elem).find('.date-custom').text().trim().split(/\s+/)[1];
            const year = $(elem).find('.date-custom span').text().trim();
            const title = $(elem).find('.title').text().trim();
            const desc = $(elem).find('.desc').text().trim();

            let link = $(elem).find('a').first().attr('href');
            if (link && !link.startsWith('http')) {
                link = this.base_url.replace(/\/$/, "") + link;
            }
            notices.push({date, month, year, title, desc, link});
        
    });
        return {
            status: 'success',
            data: notices
        }
}}

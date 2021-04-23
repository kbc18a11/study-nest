import { Controller, Get, Req, Param, Query } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
    @Get()
    findAll(@Req() request: Request): string {
        return 'This action returns all cats';
    }

    @Get('docs')
    getDocs(@Query('version') version) {
        return `This action returns a #${version} cat`;
    }

    @Get(':id')
    findOne(@Param() params): string {
        console.log(params.id);
        return `This action returns a #${params.id} cat`;
    }

}

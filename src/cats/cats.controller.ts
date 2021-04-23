import { Controller, Get, Req, Post, Param, Body, Query } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
    @Get()
    findAll(@Req() request: Request): string {
        return 'This action returns all cats';
    }

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        console.log(createCatDto);

        return `This action adds a new #${createCatDto.name} cat`;
    }


    @Get(':id')
    findOne(@Param() params): string {
        console.log(params.id);
        return `This action returns a #${params.id} cat`;
    }

}

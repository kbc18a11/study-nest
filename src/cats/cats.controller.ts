import { Controller, Get, Req, Post, Param, Body, ParseIntPipe } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { Request } from 'express';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) { }

    @Get()
    async findAll(@Req() request: Request): Promise<Cat[]> {
        return this.catsService.findAll();
    }

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
    }


    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
        return this.catsService.findOne(id);
    }

}

import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ProductModel } from "./product.model";

@Controller('product')
export class ProductController {
  @Post('create')
  async create(@Body() dto: Omit<ProductModel, '_id'>) {

  }

  @Get(':id')
  async get(@Param('id') id: string) {

  }

  @Delete('id')
  async delete(@Param('id') id: string) {

  }
}

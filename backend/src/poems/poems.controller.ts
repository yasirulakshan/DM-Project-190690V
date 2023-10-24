import { Body, Controller, Get, Post } from "@nestjs/common";
import { PoemsService } from "./poems.service";
import { SearchBody } from "src/types/search-body.type";

@Controller("poems")
export class PoemsController {
  constructor(private readonly poemsService: PoemsService) {}

  @Post("search")
  async search(@Body() body: SearchBody): Promise<{
    hits: Record<string, any>[];
    aggs: Record<string, any>;
  }> {
    return await this.poemsService.search(body);
  }

  @Get("all-poems")
  async getAllPoems(): Promise<Record<string, any>[][]> {
    return await this.poemsService.getAllPoems();
  }

  @Post("poems-by-text")
  async getPoemsByText(
    @Body("text") text: string
  ): Promise<Record<string, any>[][]> {
    return await this.poemsService.getPoemsByInputText(text);
  }

  @Post("poem-names-by-text")
  async getPoemsDetailsByText(
    @Body("text") text: string
  ): Promise<Record<string, any>> {
    return await this.poemsService.getPoemNamesByInputText(text);
  }

  @Post("poem-poets-by-text")
  async getPoetsByInputText(
    @Body("text") text: string
  ): Promise<Record<string, any>> {
    return await this.poemsService.getPoetsByInputText(text);
  }

  @Post("poem-year-by-text")
  async getYearByInputText(
    @Body("text") text: string
  ): Promise<Record<string, any>> {
    return await this.poemsService.getYearByInputText(text);
  }
}

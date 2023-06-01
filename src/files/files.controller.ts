import {
  Controller,
  Get,
  Post,
  Param,
  UploadedFile,
  UseInterceptors,
  BadRequestException,
  Res,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';

import { Response } from 'express';
import { diskStorage } from 'multer';
import { FilesService } from './files.service';

import { fileFilter, fileNamer } from './helpers';
import { ProductsService } from 'src/products/products.service';
import { Auth, GetUser } from 'src/auth/decorators';
import { User } from 'src/auth/entities/user.entity';
import { Product } from 'src/products/entities';

@ApiTags('Files - Get and Upload')
@Controller('files')
export class FilesController {
  constructor(
    private readonly filesService: FilesService,
    private readonly productService: ProductsService,
    private readonly configService: ConfigService,
  ) {}

  @Get('product/:imageName')
  findProductImage(
    @Res() res: Response,
    @Param('imageName') imageName: string,
  ) {
    const path = this.filesService.getStaticProductImage(imageName);

    res.sendFile(path);
  }

  @Post('product/:productId')
  @Auth()
  @UseInterceptors(
    FileInterceptor('file', {
      fileFilter: fileFilter,
      storage: diskStorage({
        destination: './static/products',
        filename: fileNamer,
      }),
    }),
  )
  async uploadProductImage(
    @UploadedFile() file: Express.Multer.File,
    @Param('productId', ParseUUIDPipe) id: string,
    @GetUser() user: User,
  ) {
    if (!file) {
      throw new BadRequestException('Make sure that the file is an image');
    }

    const product = await this.productService.findOne(id);

    const secureUrl = `${this.configService.get('HOST_API')}/files/product/${
      file.filename
    }`;

    this.updateInDb(secureUrl, id, user, product);

    return { secureUrl };
  }

  async updateInDb(
    secureUrl: string,
    productId: string,
    user: User,
    product: Product,
  ) {
    this.productService.updateProductImage(secureUrl, productId, product, user);
  }
}

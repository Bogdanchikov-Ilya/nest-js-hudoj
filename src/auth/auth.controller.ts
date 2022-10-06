import { Body, Controller, HttpCode, Post, Req } from "@nestjs/common";
import { AuthDto } from "./dto/auth.dto";

@Controller('auth')
export class AuthController {

  @Post('register')
  async register(@Body() dto: AuthDto) {
    return '1111'
  }

  @HttpCode(200)
  @Post('login')
  async login(@Body() body: AuthDto) {
    return body;
  }
}

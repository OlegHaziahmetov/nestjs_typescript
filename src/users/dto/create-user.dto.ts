import { ApiProperty } from "@nestjs/swagger/dist/decorators/api-property.decorator";


export class CreateUserDto {
    
    @ApiProperty( {example: 'user@mail.ru', description: 'Почта'})
    readonly email: string;

    @ApiProperty( {example: '1234', description: 'Пароль'})    
    readonly password: string;
}
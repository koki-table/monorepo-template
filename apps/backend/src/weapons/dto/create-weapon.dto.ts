import { ApiProperty } from '@nestjs/swagger';

export class CreateWeaponDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    attackPower: number;

    @ApiProperty()
    attribute: string;
}
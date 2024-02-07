import { ApiProperty } from '@nestjs/swagger';

export class UpdateWeaponDto {
    @ApiProperty({ required: false })
    name: string;

    @ApiProperty({ required: false })
    attackPower: number;

    @ApiProperty({ required: false })
    attribute: string;
}
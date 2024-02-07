import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { WeaponsService } from './weapons.service';
import { CreateWeaponDto } from './dto/create-weapon.dto';
import { UpdateWeaponDto } from './dto/update-weapon.dto';

@ApiTags('weapons')
@Controller('weapons')
export class WeaponsController {
    constructor(private readonly weaponsService: WeaponsService) {}

    @Get()
    getAllWeapons() {
        return this.weaponsService.getAllWeapons();
    }

    @Get(':id')
    getWeapon(@Param('id') id: string) {
        return this.weaponsService.getWeapon(+id);
    }

    @Post()
    createWeapon(@Body() createWeaponDto: CreateWeaponDto) {
        return this.weaponsService.createWeapon(createWeaponDto);
    }

    @Put(':id')
    updateWeapon(@Param('id') id: string, @Body() updateWeaponDto: UpdateWeaponDto) {
        return this.weaponsService.updateWeapon(+id, updateWeaponDto);
    }

    @Delete(':id')
    deleteWeapon(@Param('id') id: string) {
        return this.weaponsService.deleteWeapon(+id);
    }
}
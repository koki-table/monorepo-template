import { Injectable } from '@nestjs/common';
import { PrismaClient, Weapon } from '@prisma/client';

@Injectable()
export class WeaponsService {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async getAllWeapons(): Promise<Weapon[]> {
        return this.prisma.weapon.findMany();
    }

    async getWeapon(id: number): Promise<Weapon> {
        return this.prisma.weapon.findUnique({ where: { id } });
    }

    async createWeapon(data: { name: string; attackPower: number; attribute: string }): Promise<Weapon> {
        return this.prisma.weapon.create({ data });
    }

    async updateWeapon(id: number, data: { name?: string; attackPower?: number; attribute?: string }): Promise<Weapon> {
        return this.prisma.weapon.update({ where: { id }, data });
    }

    async deleteWeapon(id: number): Promise<Weapon> {
        return this.prisma.weapon.delete({ where: { id } });
    }
}
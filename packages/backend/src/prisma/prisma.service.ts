import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient } from '../generated/prisma/client.js';
import 'dotenv/config';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    const connectionString = `${process.env.DATABASE_URL}`;
    const adapter = new PrismaNeon({ connectionString });

    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
  }
}

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function checkExistingData() {
  const usersCount = await prisma.users.count();
  return usersCount > 0;
}

async function main() {
  const hasExistingData = await checkExistingData();
  if (!hasExistingData) {
    const nop = await prisma.users.upsert({
      where: { ftUsername: 'nop' },
      update: {},
      create: {
        ftUsername: 'nop',
        nickname: 'nop_trans',
      },
    });
    console.log({ nop });
  } else {
    console.log('Data already exists. Skipping seed operation.');
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

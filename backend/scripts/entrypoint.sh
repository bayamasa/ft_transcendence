#!/bin/bash
# https://www.prisma.io/docs/guides/database/seed-database#integrated-seeding-with-prisma-migrate
# prisma migrate dev中にseedは実行されると記載があるが、実際にうごかした時に実行されない
npx prisma migrate dev --skip-seed
npx prisma db seed

# Start the application
npm run start:dev

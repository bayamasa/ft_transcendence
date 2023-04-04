#!/bin/bash

# This script is used to reset the database and run migrations.
npx prisma migrate reset --force --skip-seed
# Create a new migration
npx prisma migrate dev --name init
npx prisma db seed

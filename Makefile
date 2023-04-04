
DB_CONTAINER_RUNNING = $(shell docker-compose ps -q db | wc -l | tr -d ' ')

.PHONY: run
run:
	docker compose up --build

.PHONY: build
build:
	docker compose build --no-cache
	
./PHONY: up
up:
	docker compose up -d
	
.PHONY: up_db
up_db:
	docker compose up -d db

.PHONY: down
down:
	docker compose down --remove-orphans

.PHONY: clean
clean:
	docker compose down --rmi all --volumes --remove-orphans

./PHONY: migrate
migrate:
ifeq ($(DB_CONTAINER_RUNNING),1)
	rm -rf ./backend/prisma/migrations
	docker compose run --rm backend /bin/bash /app/prisma/migrate.sh
	(cd ./backend && npx prisma generate)
else
	@echo "DB container is not running. Run 'make up_db' first."
endif

./PHONY: format
format:
# 重いのでlocalでやっちゃう
# docker compose run --rm backend npx prettier --write .
	(cd ./backend && npx prettier --write .)
	(cd ./frontend && npx prettier --write .)

./PHONY: storybook
storybook:
	docker compose exec frontend npx npm run storybook

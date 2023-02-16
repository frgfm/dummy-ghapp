# Build the docker
docker:
	docker build . -t dummy-ghapp:node-16

# Run it
run:
	docker-compose up -d --build

# Stop it
stop:
	docker-compose down

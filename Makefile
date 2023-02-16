# Build the docker
docker:
	docker build . -t dummy-ghapp:node-16

# Run it
run:
	docker run -d -p 3000:3000 --name dummy_bot frgfm/dummy-bot:node-16

# Stop it
stop:
	docker stop dummy_bot

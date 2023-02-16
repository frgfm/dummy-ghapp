# A minimal GitHub app with bot commands


## Quick Tour

### Running/stopping the service

You can run the API containers using this command:

```shell
make run
```

You can now navigate to `http://localhost:3000/` or interact directly with your bot.

In order to stop the service, run:
```shell
make stop
```

### Interacting with the bot


![bot interactions](https://user-images.githubusercontent.com/26927750/219503985-be9f4c19-dc11-4f3c-a1af-b8c6cc0894f9.png)

After installing the app on your desired repository, open an issue or a Pull Request. Then you can use the following bot commands in a comment:
- `/ping`: the bot will answer with a comment
- `/reaction`: the bot will add a :+1: reaction to your comment



## Installation

### Prerequisites

- [GitHub account](https://github.com/)
- [Docker](https://docs.docker.com/engine/install/)
- [Docker compose](https://docs.docker.com/compose/)
- [Make](https://www.gnu.org/software/make/) (optional)

The project was designed so that everything runs with Docker orchestration (standalone virtual environment), so you won't need to install any additional libraries.

### Probot initialization

This project was created using [probot](https://github.com/probot/probot), which will help you set your project up easily. First run the service:

```shell
make run
```

then navigate to [`http://localhost:3000/`](http://localhost:3000/). Save the webhook URL that is displayed


### GitHub app creation

Here we will create a minimal app for your service:
- Go to `Settings/Developer settings` and click on `New GitHub App`.
- Fill the name & put whatever you deem relevant as homepage URL
- Uncheck "Expire user authorization tokens"
- Fill the Webhook URL with the value from the previous section
- In repository permissions, select: Issues (read & write)
- Subscribe to the following events: Issue comment
- And confirm by clicking on "Create GitHub App"
- On the following page, click on "Generate a private key" and save the file.

Keep that tab open as you will need some information in the final step

### Probot configuration

Navigate back to [`http://localhost:3000/`](http://localhost:3000/).
Fill all the requested information with the GitHub App page then you're good to go!


## License

Distributed under the Apache 2.0 License. See [`LICENSE`](LICENSE) for more information.

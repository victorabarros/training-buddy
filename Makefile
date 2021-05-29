.DEFAULT_GOAL := help
.PHONY: help

APP_NAME?=$(shell pwd | xargs basename)
APP_DIR = /src/${APP_NAME}
DOCKER_BASE_IMAGE=node:14.16
PORT=3000

clean-up:
	@docker rm -f ${APP_NAME}

debug:
	@clear
	@echo "\e[1m\033[33mDebug mode\e[0m"
	@make docker-command COMMAND="bash"

docker-command:
	@docker run -it -v $(shell pwd):${APP_DIR} -w ${APP_DIR} \
		--env-file .env -p ${PORT}:${PORT} --name ${APP_NAME} \
		${DOCKER_BASE_IMAGE} bash -c "${COMMAND}"

ip:
	@docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' ${APP_NAME}

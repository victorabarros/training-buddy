.DEFAULT_GOAL := help
.PHONY: help

APP_NAME?=$(shell pwd | xargs basename)
APP_DIR = /src/${APP_NAME}
PWD=$(shell pwd)
DOCKER_BASE_IMAGE=node:12.18

clean-up:
	@docker rm -f ${APP_NAME}-debug

debug:
	@clear
	@echo "\e[1m\033[33mDebug mode\e[0m"
	@docker run -it -v ${PWD}:${APP_DIR} -w ${APP_DIR} \
		-p 8092:8080 --rm --name ${APP_NAME}-debug ${DOCKER_BASE_IMAGE} bash

ip:
	@docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' ${APP_NAME}

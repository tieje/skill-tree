#FROM tieje/rpi4_backend:latest
FROM python:3.10.4-buster
#RUN apt-get update --allow-releaseinfo-change
WORKDIR /backend
COPY Pipfile Pipfile.lock /backend/
ENV PYTHONUNBUFFERED 1
ENV CRYPTOGRAPHY_DONT_BUILD_RUST=1
#RUN apt-get -y install build-essential libffi-dev libssl-dev cargo
RUN pip install pipenv
RUN pipenv install --system
COPY . /backend

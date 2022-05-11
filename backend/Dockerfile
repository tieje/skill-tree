#FROM tieje/rpi4_backend:latest
FROM python:3.10.4
RUN apt-get update
WORKDIR /backend
COPY Pipfile Pipfile.lock /backend/
ENV PYTHONUNBUFFERED 1
ENV CRYPTOGRAPHY_DONT_BUILD_RUST=1
#RUN apt-get -y install build-essential libffi-dev libssl-dev cargo
RUN /usr/local/bin/python -m pip install --upgrade pip
RUN pip install pipenv
RUN pipenv install --system
COPY . /backend

FROM tieje/rpi4_backend:latest
RUN apt-get update
WORKDIR /backend
COPY Pipfile Pipfile.lock /backend/
# Cryptography dependencies
# https://cryptography.io/en/latest/installation/
RUN apt-get -y install build-essential libssl-dev libffi-dev python3-dev cargo
RUN /usr/local/bin/python -m pip install --upgrade pip\
    && pip install pipenv\
    && pipenv install --system
COPY . ./backend

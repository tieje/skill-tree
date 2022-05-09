FROM tieje/rpi4_backend:latest
RUN apt-get update
WORKDIR /backend
COPY Pipfile Pipfile.lock /backend/
RUN /usr/local/bin/python -m pip install --upgrade pip\
    && pip install pipenv\
    && pipenv install --system
COPY . ./backend

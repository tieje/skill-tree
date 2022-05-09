#!/bin/sh
python3 manage.py migrate
python3 manage.py collectstatic --noinput
gunicorn config.wsgi

"""
Gunicorn settings for config project.

For the full list of settings and their values, see
https://docs.gunicorn.org/en/stable/settings.html
"""
import multiprocessing

bind = '0.0.0.0:8000'
workers = multiprocessing.cpu_count() * 2 + 1

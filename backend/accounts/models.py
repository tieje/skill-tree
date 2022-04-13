from django.contrib.auth.models import AbstractUser
from django.db.models import AutoField, CharField


class CustomUser(AbstractUser):
    id: AutoField = AutoField(primary_key=True)

# Generated by Django 4.0.3 on 2022-04-13 23:05

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('skilltree', '0008_skilltrees_owner'),
    ]

    operations = [
        migrations.AlterField(
            model_name='skilltrees',
            name='owner',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]

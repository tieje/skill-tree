# Generated by Django 4.0.4 on 2022-05-12 14:55

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('skilltree', '0015_alter_skilltrees_theme'),
    ]

    operations = [
        migrations.AddField(
            model_name='skilltreepaths',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
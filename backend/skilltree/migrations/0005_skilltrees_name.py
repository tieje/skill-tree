# Generated by Django 4.0.3 on 2022-03-27 10:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('skilltree', '0004_rename_note_id_skilltreehexagons_note_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='skilltrees',
            name='name',
            field=models.CharField(default='test tree', max_length=70),
            preserve_default=False,
        ),
    ]

# Generated by Django 4.0.3 on 2022-04-11 20:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('skilltree', '0006_alter_skilltrees_h_0_0_0_alter_skilltrees_h_0_10_m10_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='skilltreehexagons',
            name='hex_string',
            field=models.CharField(blank=True, max_length=11, null=True),
        ),
        migrations.AlterField(
            model_name='skilltreepaths',
            name='ending_hex_string',
            field=models.CharField(blank=True, max_length=11, null=True),
        ),
        migrations.AlterField(
            model_name='skilltreepaths',
            name='starting_hex_string',
            field=models.CharField(blank=True, max_length=11, null=True),
        ),
    ]

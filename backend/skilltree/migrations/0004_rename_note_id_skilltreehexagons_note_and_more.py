# Generated by Django 4.0.3 on 2022-03-27 10:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('skilltree', '0003_alter_skilltreehexagonnotes_note_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='skilltreehexagons',
            old_name='note_id',
            new_name='note',
        ),
        migrations.RenameField(
            model_name='skilltreehexagons',
            old_name='skill_tree_id',
            new_name='skill_tree',
        ),
        migrations.RenameField(
            model_name='skilltreepaths',
            old_name='skill_tree_id',
            new_name='skill_tree',
        ),
    ]
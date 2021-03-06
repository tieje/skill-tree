# Generated by Django 4.0.4 on 2022-04-22 16:54

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('skilltree', '0011_skilltreehexagons_owner'),
    ]

    operations = [
        migrations.RenameField(
            model_name='skilltreehexagons',
            old_name='owner',
            new_name='user',
        ),
        migrations.RenameField(
            model_name='skilltrees',
            old_name='owner',
            new_name='user',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_0_0_0',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_0_10_m10',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_0_11_m11',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_0_12_m12',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_0_13_m13',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_0_14_m14',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_0_15_m15',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_0_1_m1',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_0_2_m2',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_0_3_m3',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_0_4_m4',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_0_5_m5',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_0_6_m6',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_0_7_m7',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_0_8_m8',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_0_9_m9',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_10_0_m10',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_10_10_m20',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_10_1_m11',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_10_2_m12',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_10_3_m13',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_10_4_m14',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_10_5_m15',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_10_6_m16',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_10_7_m17',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_10_8_m18',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_10_9_m19',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_10_m1_m9',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_10_m2_m8',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_10_m3_m7',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_10_m4_m6',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_10_m5_m5',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_11_0_m11',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_11_10_m21',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_11_1_m12',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_11_2_m13',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_11_3_m14',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_11_4_m15',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_11_5_m16',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_11_6_m17',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_11_7_m18',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_11_8_m19',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_11_9_m20',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_11_m1_m10',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_11_m2_m9',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_11_m3_m8',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_11_m4_m7',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_11_m5_m6',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_12_0_m12',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_12_1_m13',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_12_2_m14',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_12_3_m15',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_12_4_m16',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_12_5_m17',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_12_6_m18',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_12_7_m19',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_12_8_m20',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_12_9_m21',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_12_m1_m11',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_12_m2_m10',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_12_m3_m9',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_12_m4_m8',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_12_m5_m7',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_12_m6_m6',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_13_0_m13',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_13_1_m14',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_13_2_m15',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_13_3_m16',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_13_4_m17',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_13_5_m18',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_13_6_m19',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_13_7_m20',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_13_8_m21',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_13_9_m22',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_13_m1_m12',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_13_m2_m11',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_13_m3_m10',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_13_m4_m9',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_13_m5_m8',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_13_m6_m7',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_14_0_m14',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_14_1_m15',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_14_2_m16',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_14_3_m17',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_14_4_m18',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_14_5_m19',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_14_6_m20',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_14_7_m21',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_14_8_m22',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_14_m1_m13',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_14_m2_m12',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_14_m3_m11',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_14_m4_m10',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_14_m5_m9',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_14_m6_m8',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_14_m7_m7',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_15_0_m15',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_15_1_m16',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_15_2_m17',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_15_3_m18',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_15_4_m19',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_15_5_m20',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_15_6_m21',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_15_7_m22',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_15_8_m23',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_15_m1_m14',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_15_m2_m13',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_15_m3_m12',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_15_m4_m11',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_15_m5_m10',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_15_m6_m9',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_15_m7_m8',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_1_0_m1',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_1_10_m11',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_1_11_m12',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_1_12_m13',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_1_13_m14',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_1_14_m15',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_1_15_m16',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_1_1_m2',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_1_2_m3',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_1_3_m4',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_1_4_m5',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_1_5_m6',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_1_6_m7',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_1_7_m8',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_1_8_m9',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_1_9_m10',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_2_0_m2',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_2_10_m12',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_2_11_m13',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_2_12_m14',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_2_13_m15',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_2_14_m16',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_2_1_m3',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_2_2_m4',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_2_3_m5',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_2_4_m6',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_2_5_m7',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_2_6_m8',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_2_7_m9',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_2_8_m10',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_2_9_m11',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_2_m1_m1',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_3_0_m3',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_3_10_m13',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_3_11_m14',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_3_12_m15',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_3_13_m16',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_3_14_m17',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_3_1_m4',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_3_2_m5',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_3_3_m6',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_3_4_m7',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_3_5_m8',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_3_6_m9',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_3_7_m10',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_3_8_m11',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_3_9_m12',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_3_m1_m2',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_4_0_m4',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_4_10_m14',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_4_11_m15',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_4_12_m16',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_4_13_m17',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_4_1_m5',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_4_2_m6',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_4_3_m7',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_4_4_m8',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_4_5_m9',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_4_6_m10',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_4_7_m11',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_4_8_m12',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_4_9_m13',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_4_m1_m3',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_4_m2_m2',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_5_0_m5',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_5_10_m15',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_5_11_m16',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_5_12_m17',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_5_13_m18',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_5_1_m6',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_5_2_m7',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_5_3_m8',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_5_4_m9',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_5_5_m10',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_5_6_m11',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_5_7_m12',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_5_8_m13',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_5_9_m14',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_5_m1_m4',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_5_m2_m3',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_6_0_m6',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_6_10_m16',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_6_11_m17',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_6_12_m18',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_6_1_m7',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_6_2_m8',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_6_3_m9',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_6_4_m10',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_6_5_m11',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_6_6_m12',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_6_7_m13',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_6_8_m14',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_6_9_m15',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_6_m1_m5',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_6_m2_m4',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_6_m3_m3',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_7_0_m7',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_7_10_m17',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_7_11_m18',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_7_12_m19',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_7_1_m8',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_7_2_m9',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_7_3_m10',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_7_4_m11',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_7_5_m12',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_7_6_m13',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_7_7_m14',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_7_8_m15',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_7_9_m16',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_7_m1_m6',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_7_m2_m5',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_7_m3_m4',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_8_0_m8',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_8_10_m18',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_8_11_m19',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_8_1_m9',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_8_2_m10',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_8_3_m11',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_8_4_m12',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_8_5_m13',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_8_6_m14',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_8_7_m15',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_8_8_m16',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_8_9_m17',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_8_m1_m7',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_8_m2_m6',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_8_m3_m5',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_8_m4_m4',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_9_0_m9',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_9_10_m19',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_9_11_m20',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_9_1_m10',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_9_2_m11',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_9_3_m12',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_9_4_m13',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_9_5_m14',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_9_6_m15',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_9_7_m16',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_9_8_m17',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_9_9_m18',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_9_m1_m8',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_9_m2_m7',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_9_m3_m6',
        ),
        migrations.RemoveField(
            model_name='skilltrees',
            name='h_9_m4_m5',
        ),
        migrations.AddField(
            model_name='skilltrees',
            name='image_address',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='skilltrees',
            name='last_edit_timestamp',
            field=models.BigIntegerField(default=1650646186939),
            preserve_default=False,
        ),
        migrations.CreateModel(
            name='SkillTreeBeingLearnedByUser',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('skill_tree', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='skilltree.skilltrees')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]

from ast import Mod
from django.db.models import Model, AutoField, CharField, ForeignKey, BooleanField, TextField, CASCADE, IntegerField

title_length: int = 70


class SkillTrees(Model):
    skill_tree_id: AutoField = AutoField(primary_key=True)
    name: CharField = CharField(max_length=title_length)
    theme: CharField = CharField(max_length=20)
    # owner_id will be added later when the Accounts model is created
    # owner_id: ForeignKey = ForeignKey(Accounts, on_delete=CASCADE)
    # 256 hexagons
    h_0_0_0: IntegerField = IntegerField(null=True, blank=True)
    h_0_1_m1: IntegerField = IntegerField(null=True, blank=True)
    h_0_2_m2: IntegerField = IntegerField(null=True, blank=True)
    h_0_3_m3: IntegerField = IntegerField(null=True, blank=True)
    h_0_4_m4: IntegerField = IntegerField(null=True, blank=True)
    h_0_5_m5: IntegerField = IntegerField(null=True, blank=True)
    h_0_6_m6: IntegerField = IntegerField(null=True, blank=True)
    h_0_7_m7: IntegerField = IntegerField(null=True, blank=True)
    h_0_8_m8: IntegerField = IntegerField(null=True, blank=True)
    h_0_9_m9: IntegerField = IntegerField(null=True, blank=True)
    h_0_10_m10: IntegerField = IntegerField(null=True, blank=True)
    h_0_11_m11: IntegerField = IntegerField(null=True, blank=True)
    h_0_12_m12: IntegerField = IntegerField(null=True, blank=True)
    h_0_13_m13: IntegerField = IntegerField(null=True, blank=True)
    h_0_14_m14: IntegerField = IntegerField(null=True, blank=True)
    h_0_15_m15: IntegerField = IntegerField(null=True, blank=True)
    h_1_0_m1: IntegerField = IntegerField(null=True, blank=True)
    h_1_1_m2: IntegerField = IntegerField(null=True, blank=True)
    h_1_2_m3: IntegerField = IntegerField(null=True, blank=True)
    h_1_3_m4: IntegerField = IntegerField(null=True, blank=True)
    h_1_4_m5: IntegerField = IntegerField(null=True, blank=True)
    h_1_5_m6: IntegerField = IntegerField(null=True, blank=True)
    h_1_6_m7: IntegerField = IntegerField(null=True, blank=True)
    h_1_7_m8: IntegerField = IntegerField(null=True, blank=True)
    h_1_8_m9: IntegerField = IntegerField(null=True, blank=True)
    h_1_9_m10: IntegerField = IntegerField(null=True, blank=True)
    h_1_10_m11: IntegerField = IntegerField(null=True, blank=True)
    h_1_11_m12: IntegerField = IntegerField(null=True, blank=True)
    h_1_12_m13: IntegerField = IntegerField(null=True, blank=True)
    h_1_13_m14: IntegerField = IntegerField(null=True, blank=True)
    h_1_14_m15: IntegerField = IntegerField(null=True, blank=True)
    h_1_15_m16: IntegerField = IntegerField(null=True, blank=True)
    h_2_m1_m1: IntegerField = IntegerField(null=True, blank=True)
    h_2_0_m2: IntegerField = IntegerField(null=True, blank=True)
    h_2_1_m3: IntegerField = IntegerField(null=True, blank=True)
    h_2_2_m4: IntegerField = IntegerField(null=True, blank=True)
    h_2_3_m5: IntegerField = IntegerField(null=True, blank=True)
    h_2_4_m6: IntegerField = IntegerField(null=True, blank=True)
    h_2_5_m7: IntegerField = IntegerField(null=True, blank=True)
    h_2_6_m8: IntegerField = IntegerField(null=True, blank=True)
    h_2_7_m9: IntegerField = IntegerField(null=True, blank=True)
    h_2_8_m10: IntegerField = IntegerField(null=True, blank=True)
    h_2_9_m11: IntegerField = IntegerField(null=True, blank=True)
    h_2_10_m12: IntegerField = IntegerField(null=True, blank=True)
    h_2_11_m13: IntegerField = IntegerField(null=True, blank=True)
    h_2_12_m14: IntegerField = IntegerField(null=True, blank=True)
    h_2_13_m15: IntegerField = IntegerField(null=True, blank=True)
    h_2_14_m16: IntegerField = IntegerField(null=True, blank=True)
    h_3_m1_m2: IntegerField = IntegerField(null=True, blank=True)
    h_3_0_m3: IntegerField = IntegerField(null=True, blank=True)
    h_3_1_m4: IntegerField = IntegerField(null=True, blank=True)
    h_3_2_m5: IntegerField = IntegerField(null=True, blank=True)
    h_3_3_m6: IntegerField = IntegerField(null=True, blank=True)
    h_3_4_m7: IntegerField = IntegerField(null=True, blank=True)
    h_3_5_m8: IntegerField = IntegerField(null=True, blank=True)
    h_3_6_m9: IntegerField = IntegerField(null=True, blank=True)
    h_3_7_m10: IntegerField = IntegerField(null=True, blank=True)
    h_3_8_m11: IntegerField = IntegerField(null=True, blank=True)
    h_3_9_m12: IntegerField = IntegerField(null=True, blank=True)
    h_3_10_m13: IntegerField = IntegerField(null=True, blank=True)
    h_3_11_m14: IntegerField = IntegerField(null=True, blank=True)
    h_3_12_m15: IntegerField = IntegerField(null=True, blank=True)
    h_3_13_m16: IntegerField = IntegerField(null=True, blank=True)
    h_3_14_m17: IntegerField = IntegerField(null=True, blank=True)
    h_4_m2_m2: IntegerField = IntegerField(null=True, blank=True)
    h_4_m1_m3: IntegerField = IntegerField(null=True, blank=True)
    h_4_0_m4: IntegerField = IntegerField(null=True, blank=True)
    h_4_1_m5: IntegerField = IntegerField(null=True, blank=True)
    h_4_2_m6: IntegerField = IntegerField(null=True, blank=True)
    h_4_3_m7: IntegerField = IntegerField(null=True, blank=True)
    h_4_4_m8: IntegerField = IntegerField(null=True, blank=True)
    h_4_5_m9: IntegerField = IntegerField(null=True, blank=True)
    h_4_6_m10: IntegerField = IntegerField(null=True, blank=True)
    h_4_7_m11: IntegerField = IntegerField(null=True, blank=True)
    h_4_8_m12: IntegerField = IntegerField(null=True, blank=True)
    h_4_9_m13: IntegerField = IntegerField(null=True, blank=True)
    h_4_10_m14: IntegerField = IntegerField(null=True, blank=True)
    h_4_11_m15: IntegerField = IntegerField(null=True, blank=True)
    h_4_12_m16: IntegerField = IntegerField(null=True, blank=True)
    h_4_13_m17: IntegerField = IntegerField(null=True, blank=True)
    h_5_m2_m3: IntegerField = IntegerField(null=True, blank=True)
    h_5_m1_m4: IntegerField = IntegerField(null=True, blank=True)
    h_5_0_m5: IntegerField = IntegerField(null=True, blank=True)
    h_5_1_m6: IntegerField = IntegerField(null=True, blank=True)
    h_5_2_m7: IntegerField = IntegerField(null=True, blank=True)
    h_5_3_m8: IntegerField = IntegerField(null=True, blank=True)
    h_5_4_m9: IntegerField = IntegerField(null=True, blank=True)
    h_5_5_m10: IntegerField = IntegerField(null=True, blank=True)
    h_5_6_m11: IntegerField = IntegerField(null=True, blank=True)
    h_5_7_m12: IntegerField = IntegerField(null=True, blank=True)
    h_5_8_m13: IntegerField = IntegerField(null=True, blank=True)
    h_5_9_m14: IntegerField = IntegerField(null=True, blank=True)
    h_5_10_m15: IntegerField = IntegerField(null=True, blank=True)
    h_5_11_m16: IntegerField = IntegerField(null=True, blank=True)
    h_5_12_m17: IntegerField = IntegerField(null=True, blank=True)
    h_5_13_m18: IntegerField = IntegerField(null=True, blank=True)
    h_6_m3_m3: IntegerField = IntegerField(null=True, blank=True)
    h_6_m2_m4: IntegerField = IntegerField(null=True, blank=True)
    h_6_m1_m5: IntegerField = IntegerField(null=True, blank=True)
    h_6_0_m6: IntegerField = IntegerField(null=True, blank=True)
    h_6_1_m7: IntegerField = IntegerField(null=True, blank=True)
    h_6_2_m8: IntegerField = IntegerField(null=True, blank=True)
    h_6_3_m9: IntegerField = IntegerField(null=True, blank=True)
    h_6_4_m10: IntegerField = IntegerField(null=True, blank=True)
    h_6_5_m11: IntegerField = IntegerField(null=True, blank=True)
    h_6_6_m12: IntegerField = IntegerField(null=True, blank=True)
    h_6_7_m13: IntegerField = IntegerField(null=True, blank=True)
    h_6_8_m14: IntegerField = IntegerField(null=True, blank=True)
    h_6_9_m15: IntegerField = IntegerField(null=True, blank=True)
    h_6_10_m16: IntegerField = IntegerField(null=True, blank=True)
    h_6_11_m17: IntegerField = IntegerField(null=True, blank=True)
    h_6_12_m18: IntegerField = IntegerField(null=True, blank=True)
    h_7_m3_m4: IntegerField = IntegerField(null=True, blank=True)
    h_7_m2_m5: IntegerField = IntegerField(null=True, blank=True)
    h_7_m1_m6: IntegerField = IntegerField(null=True, blank=True)
    h_7_0_m7: IntegerField = IntegerField(null=True, blank=True)
    h_7_1_m8: IntegerField = IntegerField(null=True, blank=True)
    h_7_2_m9: IntegerField = IntegerField(null=True, blank=True)
    h_7_3_m10: IntegerField = IntegerField(null=True, blank=True)
    h_7_4_m11: IntegerField = IntegerField(null=True, blank=True)
    h_7_5_m12: IntegerField = IntegerField(null=True, blank=True)
    h_7_6_m13: IntegerField = IntegerField(null=True, blank=True)
    h_7_7_m14: IntegerField = IntegerField(null=True, blank=True)
    h_7_8_m15: IntegerField = IntegerField(null=True, blank=True)
    h_7_9_m16: IntegerField = IntegerField(null=True, blank=True)
    h_7_10_m17: IntegerField = IntegerField(null=True, blank=True)
    h_7_11_m18: IntegerField = IntegerField(null=True, blank=True)
    h_7_12_m19: IntegerField = IntegerField(null=True, blank=True)
    h_8_m4_m4: IntegerField = IntegerField(null=True, blank=True)
    h_8_m3_m5: IntegerField = IntegerField(null=True, blank=True)
    h_8_m2_m6: IntegerField = IntegerField(null=True, blank=True)
    h_8_m1_m7: IntegerField = IntegerField(null=True, blank=True)
    h_8_0_m8: IntegerField = IntegerField(null=True, blank=True)
    h_8_1_m9: IntegerField = IntegerField(null=True, blank=True)
    h_8_2_m10: IntegerField = IntegerField(null=True, blank=True)
    h_8_3_m11: IntegerField = IntegerField(null=True, blank=True)
    h_8_4_m12: IntegerField = IntegerField(null=True, blank=True)
    h_8_5_m13: IntegerField = IntegerField(null=True, blank=True)
    h_8_6_m14: IntegerField = IntegerField(null=True, blank=True)
    h_8_7_m15: IntegerField = IntegerField(null=True, blank=True)
    h_8_8_m16: IntegerField = IntegerField(null=True, blank=True)
    h_8_9_m17: IntegerField = IntegerField(null=True, blank=True)
    h_8_10_m18: IntegerField = IntegerField(null=True, blank=True)
    h_8_11_m19: IntegerField = IntegerField(null=True, blank=True)
    h_9_m4_m5: IntegerField = IntegerField(null=True, blank=True)
    h_9_m3_m6: IntegerField = IntegerField(null=True, blank=True)
    h_9_m2_m7: IntegerField = IntegerField(null=True, blank=True)
    h_9_m1_m8: IntegerField = IntegerField(null=True, blank=True)
    h_9_0_m9: IntegerField = IntegerField(null=True, blank=True)
    h_9_1_m10: IntegerField = IntegerField(null=True, blank=True)
    h_9_2_m11: IntegerField = IntegerField(null=True, blank=True)
    h_9_3_m12: IntegerField = IntegerField(null=True, blank=True)
    h_9_4_m13: IntegerField = IntegerField(null=True, blank=True)
    h_9_5_m14: IntegerField = IntegerField(null=True, blank=True)
    h_9_6_m15: IntegerField = IntegerField(null=True, blank=True)
    h_9_7_m16: IntegerField = IntegerField(null=True, blank=True)
    h_9_8_m17: IntegerField = IntegerField(null=True, blank=True)
    h_9_9_m18: IntegerField = IntegerField(null=True, blank=True)
    h_9_10_m19: IntegerField = IntegerField(null=True, blank=True)
    h_9_11_m20: IntegerField = IntegerField(null=True, blank=True)
    h_10_m5_m5: IntegerField = IntegerField(null=True, blank=True)
    h_10_m4_m6: IntegerField = IntegerField(null=True, blank=True)
    h_10_m3_m7: IntegerField = IntegerField(null=True, blank=True)
    h_10_m2_m8: IntegerField = IntegerField(null=True, blank=True)
    h_10_m1_m9: IntegerField = IntegerField(null=True, blank=True)
    h_10_0_m10: IntegerField = IntegerField(null=True, blank=True)
    h_10_1_m11: IntegerField = IntegerField(null=True, blank=True)
    h_10_2_m12: IntegerField = IntegerField(null=True, blank=True)
    h_10_3_m13: IntegerField = IntegerField(null=True, blank=True)
    h_10_4_m14: IntegerField = IntegerField(null=True, blank=True)
    h_10_5_m15: IntegerField = IntegerField(null=True, blank=True)
    h_10_6_m16: IntegerField = IntegerField(null=True, blank=True)
    h_10_7_m17: IntegerField = IntegerField(null=True, blank=True)
    h_10_8_m18: IntegerField = IntegerField(null=True, blank=True)
    h_10_9_m19: IntegerField = IntegerField(null=True, blank=True)
    h_10_10_m20: IntegerField = IntegerField(null=True, blank=True)
    h_11_m5_m6: IntegerField = IntegerField(null=True, blank=True)
    h_11_m4_m7: IntegerField = IntegerField(null=True, blank=True)
    h_11_m3_m8: IntegerField = IntegerField(null=True, blank=True)
    h_11_m2_m9: IntegerField = IntegerField(null=True, blank=True)
    h_11_m1_m10: IntegerField = IntegerField(null=True, blank=True)
    h_11_0_m11: IntegerField = IntegerField(null=True, blank=True)
    h_11_1_m12: IntegerField = IntegerField(null=True, blank=True)
    h_11_2_m13: IntegerField = IntegerField(null=True, blank=True)
    h_11_3_m14: IntegerField = IntegerField(null=True, blank=True)
    h_11_4_m15: IntegerField = IntegerField(null=True, blank=True)
    h_11_5_m16: IntegerField = IntegerField(null=True, blank=True)
    h_11_6_m17: IntegerField = IntegerField(null=True, blank=True)
    h_11_7_m18: IntegerField = IntegerField(null=True, blank=True)
    h_11_8_m19: IntegerField = IntegerField(null=True, blank=True)
    h_11_9_m20: IntegerField = IntegerField(null=True, blank=True)
    h_11_10_m21: IntegerField = IntegerField(null=True, blank=True)
    h_12_m6_m6: IntegerField = IntegerField(null=True, blank=True)
    h_12_m5_m7: IntegerField = IntegerField(null=True, blank=True)
    h_12_m4_m8: IntegerField = IntegerField(null=True, blank=True)
    h_12_m3_m9: IntegerField = IntegerField(null=True, blank=True)
    h_12_m2_m10: IntegerField = IntegerField(null=True, blank=True)
    h_12_m1_m11: IntegerField = IntegerField(null=True, blank=True)
    h_12_0_m12: IntegerField = IntegerField(null=True, blank=True)
    h_12_1_m13: IntegerField = IntegerField(null=True, blank=True)
    h_12_2_m14: IntegerField = IntegerField(null=True, blank=True)
    h_12_3_m15: IntegerField = IntegerField(null=True, blank=True)
    h_12_4_m16: IntegerField = IntegerField(null=True, blank=True)
    h_12_5_m17: IntegerField = IntegerField(null=True, blank=True)
    h_12_6_m18: IntegerField = IntegerField(null=True, blank=True)
    h_12_7_m19: IntegerField = IntegerField(null=True, blank=True)
    h_12_8_m20: IntegerField = IntegerField(null=True, blank=True)
    h_12_9_m21: IntegerField = IntegerField(null=True, blank=True)
    h_13_m6_m7: IntegerField = IntegerField(null=True, blank=True)
    h_13_m5_m8: IntegerField = IntegerField(null=True, blank=True)
    h_13_m4_m9: IntegerField = IntegerField(null=True, blank=True)
    h_13_m3_m10: IntegerField = IntegerField(null=True, blank=True)
    h_13_m2_m11: IntegerField = IntegerField(null=True, blank=True)
    h_13_m1_m12: IntegerField = IntegerField(null=True, blank=True)
    h_13_0_m13: IntegerField = IntegerField(null=True, blank=True)
    h_13_1_m14: IntegerField = IntegerField(null=True, blank=True)
    h_13_2_m15: IntegerField = IntegerField(null=True, blank=True)
    h_13_3_m16: IntegerField = IntegerField(null=True, blank=True)
    h_13_4_m17: IntegerField = IntegerField(null=True, blank=True)
    h_13_5_m18: IntegerField = IntegerField(null=True, blank=True)
    h_13_6_m19: IntegerField = IntegerField(null=True, blank=True)
    h_13_7_m20: IntegerField = IntegerField(null=True, blank=True)
    h_13_8_m21: IntegerField = IntegerField(null=True, blank=True)
    h_13_9_m22: IntegerField = IntegerField(null=True, blank=True)
    h_14_m7_m7: IntegerField = IntegerField(null=True, blank=True)
    h_14_m6_m8: IntegerField = IntegerField(null=True, blank=True)
    h_14_m5_m9: IntegerField = IntegerField(null=True, blank=True)
    h_14_m4_m10: IntegerField = IntegerField(null=True, blank=True)
    h_14_m3_m11: IntegerField = IntegerField(null=True, blank=True)
    h_14_m2_m12: IntegerField = IntegerField(null=True, blank=True)
    h_14_m1_m13: IntegerField = IntegerField(null=True, blank=True)
    h_14_0_m14: IntegerField = IntegerField(null=True, blank=True)
    h_14_1_m15: IntegerField = IntegerField(null=True, blank=True)
    h_14_2_m16: IntegerField = IntegerField(null=True, blank=True)
    h_14_3_m17: IntegerField = IntegerField(null=True, blank=True)
    h_14_4_m18: IntegerField = IntegerField(null=True, blank=True)
    h_14_5_m19: IntegerField = IntegerField(null=True, blank=True)
    h_14_6_m20: IntegerField = IntegerField(null=True, blank=True)
    h_14_7_m21: IntegerField = IntegerField(null=True, blank=True)
    h_14_8_m22: IntegerField = IntegerField(null=True, blank=True)
    h_15_m7_m8: IntegerField = IntegerField(null=True, blank=True)
    h_15_m6_m9: IntegerField = IntegerField(null=True, blank=True)
    h_15_m5_m10: IntegerField = IntegerField(null=True, blank=True)
    h_15_m4_m11: IntegerField = IntegerField(null=True, blank=True)
    h_15_m3_m12: IntegerField = IntegerField(null=True, blank=True)
    h_15_m2_m13: IntegerField = IntegerField(null=True, blank=True)
    h_15_m1_m14: IntegerField = IntegerField(null=True, blank=True)
    h_15_0_m15: IntegerField = IntegerField(null=True, blank=True)
    h_15_1_m16: IntegerField = IntegerField(null=True, blank=True)
    h_15_2_m17: IntegerField = IntegerField(null=True, blank=True)
    h_15_3_m18: IntegerField = IntegerField(null=True, blank=True)
    h_15_4_m19: IntegerField = IntegerField(null=True, blank=True)
    h_15_5_m20: IntegerField = IntegerField(null=True, blank=True)
    h_15_6_m21: IntegerField = IntegerField(null=True, blank=True)
    h_15_7_m22: IntegerField = IntegerField(null=True, blank=True)
    h_15_8_m23: IntegerField = IntegerField(null=True, blank=True)

class SkillTreeHexagons(Model):
    hex_id: AutoField = AutoField(primary_key=True)
    note: TextField = TextField(blank=True, null=True)
    hex_q: IntegerField = IntegerField(null=False)
    hex_r: IntegerField = IntegerField(null=False)
    hex_s: IntegerField = IntegerField(null=False)
    skill_tree: ForeignKey = ForeignKey(SkillTrees, on_delete=CASCADE)
    allow_verbal_feedback: BooleanField = BooleanField(default=True)
    allow_quantitative_feedback: BooleanField = BooleanField(default=True)
    image_address: TextField = TextField(blank=True, null=True)
    title: CharField = CharField(
        max_length=title_length, blank=True, null=True)

    hex_string: CharField = CharField(null=False, max_length=11, blank=True)

    def save(self, *args, **kwargs):
        self.hex_string = 'h_' + '_'.join([
            str(self.hex_q),
            str(self.hex_r),
            str(self.hex_s)
        ]).replace('-', 'm')
        super().save(*args, **kwargs)


class SkillTreePaths(Model):
    path_id: AutoField = AutoField(primary_key=True)
    skill_tree: ForeignKey = ForeignKey(SkillTrees, on_delete=CASCADE)
    starting_hex_q: IntegerField = IntegerField(null=False)
    starting_hex_r: IntegerField = IntegerField(null=False)
    starting_hex_s: IntegerField = IntegerField(null=False)
    ending_hex_q: IntegerField = IntegerField(null=False)
    ending_hex_r: IntegerField = IntegerField(null=False)
    ending_hex_s: IntegerField = IntegerField(null=False)

    starting_hex_string: CharField = CharField(
        null=False, max_length=11, blank=True)
    ending_hex_string: CharField = CharField(
        null=False, max_length=11, blank=True)

    def save(self, *args, **kwargs):
        self.starting_hex_string = ','.join([
            str(self.starting_hex_q),
            str(self.starting_hex_r),
            str(self.starting_hex_s)
        ])
        self.ending_hex_string = ','.join([
            str(self.ending_hex_q),
            str(self.ending_hex_r),
            str(self.ending_hex_s)
        ])
        super().save(*args, **kwargs)

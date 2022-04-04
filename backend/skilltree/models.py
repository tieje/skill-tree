from ast import Mod
from django.db.models import Model, AutoField, CharField, ForeignKey, BooleanField, TextField, CASCADE, IntegerField

title_length: int = 70


class SkillTrees(Model):
    skill_tree_id: AutoField = AutoField(primary_key=True)
    name: CharField = CharField(max_length=title_length)
    theme: CharField = CharField(max_length=20)
    # owner_id will be added later when the Accounts model is created
    # owner_id: ForeignKey = ForeignKey(Accounts, on_delete=CASCADE)


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
    title: CharField = CharField(max_length=title_length, blank=True, null=True)

    hex_string: CharField = CharField(null=False, max_length=11, blank=True)

    def save(self, *args, **kwargs):
        self.hex_string = ','.join([
            str(self.hex_q),
            str(self.hex_r),
            str(self.hex_s)
        ])
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

from django.db.models import Model, AutoField, CharField, ForeignKey, BooleanField, TextField, CASCADE, IntegerField

title_length: int = 70

class SkillTreeHexagonNotes(Model):
    note_id: AutoField = AutoField(primary_key=True)
    note: TextField = TextField(blank=True, null=True)


class SkillTrees(Model):
    skill_tree_id: AutoField = AutoField(primary_key=True)
    name: CharField = CharField(max_length=title_length)
    theme: CharField = CharField(max_length=20)
    # owner_id will be added later when the Accounts model is created
    # owner_id: ForeignKey = ForeignKey(Accounts, on_delete=CASCADE)


class SkillTreeHexagons(Model):
    hex_id: AutoField = AutoField(primary_key=True)
    note: ForeignKey = ForeignKey(
        SkillTreeHexagonNotes, on_delete=CASCADE, blank=True, null=True)
    hex_q: IntegerField = IntegerField(null=False)
    hex_r: IntegerField = IntegerField(null=False)
    hex_s: IntegerField = IntegerField(null=False)
    skill_tree: ForeignKey = ForeignKey(SkillTrees, on_delete=CASCADE)
    allow_verbal_feedback: BooleanField = BooleanField(default=False)
    allow_quantitative_feedback: BooleanField = BooleanField(default=False)
    image_address: TextField = TextField(blank=True, null=True)
    title: CharField = CharField(max_length=title_length)


class SkillTreePaths(Model):
    path_id: AutoField = AutoField(primary_key=True)
    skill_tree: ForeignKey = ForeignKey(SkillTrees, on_delete=CASCADE)
    starting_hex_q: IntegerField = IntegerField(null=False)
    starting_hex_r: IntegerField = IntegerField(null=False)
    starting_hex_s: IntegerField = IntegerField(null=False)
    ending_hex_q: IntegerField = IntegerField(null=False)
    ending_hex_r: IntegerField = IntegerField(null=False)
    ending_hex_s: IntegerField = IntegerField(null=False)

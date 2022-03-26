from ast import Mod
from django.db.models import Model, Field, AutoField, CharField, ForeignKey, BooleanField, TextField, CASCADE, IntegerField
from pyparsing import Char

class SkillTree(Model):
    skill_tree_id: Field = Field(primary_key=True)
    owner_id: AutoField = AutoField()
    theme: CharField = CharField(max_length=20)

class SkillTreeHexagons(Model):
    id: Field = Field(primary_key=True)
    hex_q: IntegerField = IntegerField(null=False)
    hex_r: IntegerField = IntegerField(null=False)
    hex_s: IntegerField = IntegerField(null=False)
    skill_tree_id: ForeignKey = ForeignKey(SkillTree, on_delete=CASCADE)
    allow_verbal_feedback: BooleanField = BooleanField(default=False)
    allow_quantitative_feedback: BooleanField = BooleanField(default=False)
    image_address: TextField = TextField()
    title: CharField = CharField(max_length=70)
    notes: TextField = TextField()

class SkillTreePaths(Model):
    
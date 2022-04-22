from django.contrib import admin
from .models import SkillTrees, SkillTreeHexagons, SkillTreePaths, SkillTreeBeingLearnedByUser

models = [
    SkillTrees,
    SkillTreeHexagons,
    SkillTreePaths,
    SkillTreeBeingLearnedByUser,
]
admin.site.register(models)

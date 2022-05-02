from django.contrib import admin
from .models import SkillTreeThemes, SkillTrees, SkillTreeHexagons, SkillTreePaths, SkillTreeBeingLearnedByUser

models = [
    SkillTrees,
    SkillTreeHexagons,
    SkillTreePaths,
    SkillTreeBeingLearnedByUser,
    SkillTreeThemes,
]
admin.site.register(models)

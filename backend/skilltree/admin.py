from django.contrib import admin
from .models import SkillTrees, SkillTreeHexagons, SkillTreePaths

models = [
    SkillTrees,
    SkillTreeHexagons,
    SkillTreePaths,
]

admin.site.register(models)

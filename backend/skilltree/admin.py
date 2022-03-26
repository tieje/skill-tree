from django.contrib import admin
from .models import SkillTree, SkillTreeHexagons, SkillTreePaths

models = [
    SkillTree,
    SkillTreeHexagons,
    SkillTreePaths
]

admin.site.register(models)

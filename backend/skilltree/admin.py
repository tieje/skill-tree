from django.contrib import admin
from .models import SkillTrees, SkillTreeHexagons, SkillTreePaths, SkillTreeHexagonNotes

models = [
    SkillTrees,
    SkillTreeHexagons,
    SkillTreePaths,
    SkillTreeHexagonNotes,
]

admin.site.register(models)

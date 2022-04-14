from django.contrib.auth import get_user_model
from rest_framework import viewsets
from skilltree.models import SkillTrees, SkillTreeHexagons, SkillTreePaths
from .serializers import SkillTreesSerializer, SkillTreeHexagonsSerializer, SkillTreePathsSerializer


class SkillTreeHexagonsViewSet(viewsets.ModelViewSet):
    queryset = SkillTreeHexagons.objects.all()
    serializer_class = SkillTreeHexagonsSerializer


class SkillTreePathsViewSet(viewsets.ModelViewSet):
    queryset = SkillTreePaths.objects.all()
    serializer_class = SkillTreePathsSerializer


class SkillTreesViewSet(viewsets.ModelViewSet):
    queryset = SkillTrees.objects.all()
    serializer_class = SkillTreesSerializer

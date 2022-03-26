from rest_framework import viewsets
from skilltree.models import SkillTree, SkillTreeHexagons, SkillTreePaths
from .serializers import SkillTreeSerializer, SkillTreeHexagonsSerializer, SkillTreePathsSerializer


class SkillTreeViewSet(viewsets.ModelViewSet):
    queryset = SkillTree.objects.all()
    serializer_class = SkillTreeSerializer


class SkillTreeHexagonsViewSet(viewsets.ModelViewSet):
    queryset = SkillTreeHexagons.objects.all()
    serializer_class = SkillTreeHexagonsSerializer


class SkillTreePathsViewSet(viewsets.ModelViewSet):
    queryset = SkillTreePaths.objects.all()
    serializer_class = SkillTreePathsSerializer

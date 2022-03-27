from rest_framework import viewsets
from skilltree.models import SkillTrees, SkillTreeHexagons, SkillTreePaths, SkillTreeHexagonNotes
from .serializers import SkillTreesSerializer, SkillTreeHexagonsSerializer, SkillTreePathsSerializer, SkillTreeHexagonNotesSerializer


class SkillTreeHexagonsViewSet(viewsets.ModelViewSet):
    queryset = SkillTreeHexagons.objects.all()
    serializer_class = SkillTreeHexagonsSerializer


class SkillTreePathsViewSet(viewsets.ModelViewSet):
    queryset = SkillTreePaths.objects.all()
    serializer_class = SkillTreePathsSerializer


class SkillTreeHexagonNotesViewSet(viewsets.ModelViewSet):
    queryset = SkillTreeHexagonNotes.objects.all()
    serializer_class = SkillTreeHexagonNotesSerializer


class SkillTreesViewSet(viewsets.ModelViewSet):
    queryset = SkillTrees.objects.all()
    serializer_class = SkillTreesSerializer

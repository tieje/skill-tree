from django.contrib.auth import get_user_model
from rest_framework import viewsets
from skilltree.models import SkillTrees, SkillTreeHexagons, SkillTreePaths
from .serializers import SkillTreesSerializer, SkillTreeHexagonsSerializer, SkillTreePathsSerializer, UserSerializer, SkillTreesBeingLearnedByUserSerializer, SkillTreesBeingTaughtByUserSerializer
from rest_framework.permissions import IsAdminUser
from .permissions import IsAuthorOrReadOnly


class SkillTreeHexagonsViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthorOrReadOnly,)
    queryset = SkillTreeHexagons.objects.all()
    serializer_class = SkillTreeHexagonsSerializer


class SkillTreePathsViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthorOrReadOnly,)
    queryset = SkillTreePaths.objects.all()
    serializer_class = SkillTreePathsSerializer


class SkillTreesViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthorOrReadOnly,)
    queryset = SkillTrees.objects.all()
    serializer_class = SkillTreesSerializer


class UserViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAdminUser]
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer


class SkillTreeBeingLearnedByUserViewSet(viewsets.ModelViewSet):
    #permission_classes = [IsAuthorOrReadOnly]
    queryset = get_user_model().objects.all()
    serializer_class = SkillTreesBeingLearnedByUserSerializer


class SkillTreesBeingTaughtByUserViewSet(viewsets.ModelViewSet):
    #permission_classes = [IsAuthorOrReadOnly]
    queryset = get_user_model().objects.all()
    serializer_class = SkillTreesBeingTaughtByUserSerializer

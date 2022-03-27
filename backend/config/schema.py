'''
import graphene
from skilltree.models import SkillTrees, SkillTreePaths, SkillTreeHexagons, SkillTreeHexagonNotes
from graphene_django import DjangoObjectType, DjangoListField


class SkillTreesType(DjangoObjectType):
    class Meta:
        model = SkillTrees
        fields = ('__all__')


class SkillTreePathsType(DjangoObjectType):
    class Meta:
        model = SkillTreePaths
        fields = ('__all__')


class SkillTreeHexagonsType(DjangoObjectType):
    class Meta:
        model = SkillTreeHexagons
        fields = ('__all__')


class SkillTreeHexagonNotesType(DjangoObjectType):
    class Meta:
        model = SkillTreeHexagonNotes
        fields = ('__all__')


class Query(graphene.ObjectType):
    skilltrees = DjangoListField(
        SkillTreesType,

    )
'''

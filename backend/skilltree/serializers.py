from rest_framework import serializers
from skilltree.models import SkillTrees, SkillTreeHexagons, SkillTreePaths, SkillTreeHexagonNotes
from drf_queryfields import QueryFieldsMixin


class SkillTreeHexagonsSerializer(QueryFieldsMixin, serializers.ModelSerializer):
    class Meta:
        model = SkillTreeHexagons
        fields = ('__all__')


class SkillTreePathsSerializer(QueryFieldsMixin, serializers.ModelSerializer):
    class Meta:
        model = SkillTreePaths
        fields = ('__all__')


class SkillTreeHexagonNotesSerializer(QueryFieldsMixin, serializers.ModelSerializer):
    class Meta:
        model = SkillTreeHexagonNotes
        fields = ('__all__')


class SkillTreesSerializer(QueryFieldsMixin, serializers.ModelSerializer):
    path_ids = serializers.SerializerMethodField()
    hex_ids = serializers.SerializerMethodField()

    class Meta:
        model = SkillTrees
        fields = ('__all__')

    def get_hex_ids(self, obj):
        '''Get all hex ids that have the skill_tree_id'''
        pass

    def get_path_ids(self, obj):
        '''Get all hex ids that have the skill_tree_id'''
        pass

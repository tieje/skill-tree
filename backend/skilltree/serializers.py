from django.db.models import QuerySet
from rest_framework import serializers
from skilltree.models import SkillTrees, SkillTreeHexagons, SkillTreePaths
from drf_queryfields import QueryFieldsMixin


class SkillTreeHexagonsSerializer(QueryFieldsMixin, serializers.ModelSerializer):
    # hexList = serializers.SerializerMethodField()

    class Meta:
        model = SkillTreeHexagons
        fields = ('__all__')


class SkillTreePathsSerializer(QueryFieldsMixin, serializers.ModelSerializer):
    class Meta:
        model = SkillTreePaths
        fields = ('__all__')


class SkillTreesSerializer(QueryFieldsMixin, serializers.ModelSerializer):
    class Meta:
        model = SkillTrees
        fields = ('__all__')
    paths = serializers.SerializerMethodField()
    def get_paths(self, obj: SkillTrees) -> QuerySet:
        '''Get all hex ids that have the skill_tree_id'''
        paths: QuerySet = SkillTreePaths.objects.filter(
            skill_tree_id=obj.skill_tree_id).values()
        return paths
    """
    hexagons = serializers.SerializerMethodField()
    hex_string_list = serializers.SerializerMethodField()

    def get_hexagons(self, obj: SkillTrees) -> QuerySet:
        '''
        Get all hex ids that have the skill_tree_id
        The object is the SkillTrees instance
        For example, print(obj.skill_tree_id) will print each skill tree instance's skill_tree_id
        '''
        hexagons: QuerySet = SkillTreeHexagons.objects.filter(
            skill_tree_id=obj.skill_tree_id).values()
        return hexagons


    def get_hex_string_list(self, obj: SkillTrees) -> QuerySet:
        '''Collect all hex string ids'''
        hex_string_ids_obj: QuerySet = SkillTreeHexagons.objects.filter(
            skill_tree_id=obj.skill_tree_id).values_list('hex_string')
        return hex_string_ids_obj
    """

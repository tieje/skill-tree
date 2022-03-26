from rest_framework import serializers
from skilltree.models import SkillTree, SkillTreeHexagons, SkillTreePaths
from drf_queryfields import QueryFieldsMixin


class SkillTreeSerializer(QueryFieldsMixin, serializers.ModelSerializer):
    class Meta:
        model = SkillTree
        fields = ('skill_tree_id', 'theme',
                  # 'owner_id'
                  )


class SkillTreeHexagonsSerializer(QueryFieldsMixin, serializers.ModelSerializer):
    class Meta:
        model = SkillTreeHexagons
        fields = ('hex_id', 'hex_q', 'hex_r', 'hex_s', 'skill_tree_id', 'allow_verbal_feedback',
                  'allow_quantitative_feedback', 'image_address', 'title', 'notes')


class SkillTreePathsSerializer(QueryFieldsMixin, serializers.ModelSerializer):
    class Meta:
        model = SkillTreePaths
        fields = ('path_id', 'skill_tree_id', 'starting_hex_q', 'starting_hex_r',
                  'starting_hex_s', 'ending_hex_q', 'ending_hex_r', 'ending_hex_s')

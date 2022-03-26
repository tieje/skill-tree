from .views import SkillTreeViewSet, SkillTreeHexagonsViewSet, SkillTreePathsViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('skilltrees', SkillTreeViewSet, basename='skilltrees')
router.register('skilltreehexagons', SkillTreeHexagonsViewSet, basename='skilltreehexagons')
router.register('skilltreepaths', SkillTreePathsViewSet, basename='skilltreepaths')
urlpatterns = router.urls

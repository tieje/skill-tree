from .views import SkillTreesViewSet, SkillTreeHexagonsViewSet, SkillTreePathsViewSet, UserViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('skilltrees', SkillTreesViewSet, basename='skilltrees')
router.register('skilltreehexagons', SkillTreeHexagonsViewSet,
                basename='skilltreehexagons')
router.register('skilltreepaths', SkillTreePathsViewSet,
                basename='skilltreepaths')
router.register('users', UserViewSet, basename='users')
urlpatterns = router.urls

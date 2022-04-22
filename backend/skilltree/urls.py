from .views import SkillTreesViewSet, SkillTreeHexagonsViewSet, SkillTreePathsViewSet, UserViewSet, SkillTreeBeingLearnedByUserViewSet, SkillTreesBeingTaughtByUserViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('skilltrees', SkillTreesViewSet, basename='skilltrees')
router.register('skilltreehexagons', SkillTreeHexagonsViewSet,
                basename='skilltreehexagons')
router.register('skilltreepaths', SkillTreePathsViewSet,
                basename='skilltreepaths')
router.register('users', UserViewSet, basename='users')
router.register('learning', SkillTreeBeingLearnedByUserViewSet, basename='learning')
router.register('teaching', SkillTreesBeingTaughtByUserViewSet, basename='teaching')
urlpatterns = router.urls

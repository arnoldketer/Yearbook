from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from students.views import CreateUserView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('students/user/register/', CreateUserView.as_view(), name='register'),
    path('students/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('students/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('students-auth/', include('rest_framework.urls')),
    path('students/', include('students.urls')),
    path('projects/', include('Projects.urls')),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)



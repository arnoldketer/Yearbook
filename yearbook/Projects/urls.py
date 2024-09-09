from django.urls import path
from .views import ProjectListCreate, ProjectDetail, Project_list
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    #API Endpoints
    path('projects/', ProjectListCreate.as_view(), name='project-list-create'),# For listing and creating projects
    path('projects/<int:pk>/', ProjectDetail.as_view(), name='project-detail'),# For retrieving, updating or deleting by its primary key

    #Web Page View
    path('', Project_list, name='project-list'), # Serves the 'Projects/' URL for web view
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


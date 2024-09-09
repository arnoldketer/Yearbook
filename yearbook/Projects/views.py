# Projects/views.py
from django.http import JsonResponse
from rest_framework import generics, permissions
from .models import Project
from .serializers import ProjectSerializer
from students.models import Student
from rest_framework.exceptions import ValidationError

class ProjectListCreate(generics.ListCreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes= [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        user = self.request.user
        student = Student.objects.filter(author=user).first()  # Fetch the related Student instance
        if not student:
            raise ValidationError("No student profile found for this user.")
        serializer.save(student=student)





class ProjectDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]  # Anyone can read, but only logged-in users can edit/delete

def Project_list(request):
    # Fetch all projects from the database
    Projects = Project.objects.all()
    #Serialize the data
    serializer = ProjectSerializer(Projects, many = True)
    # Return the serialized data as a JSON
    return JsonResponse(serializer.data, safe=False)

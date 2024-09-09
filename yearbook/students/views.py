from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .models import Student
from students.serializers import StudentSerializer, UserSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAuthenticatedOrReadOnly
from rest_framework.exceptions import PermissionDenied

# Create your views here.
class StudentListCreate(generics.ListCreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        if self.request.user.is_authenticated:
            serializer.save(author=self.request.user)
        else:
            raise PermissionDenied("You must be logged in to add data.")
        

# Update View for Student Data (Only for Authors)
class StudentUpdate(generics.RetrieveUpdateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Restrict the queryset to the authenticated user's data only
        user = self.request.user
        return Student.objects.filter(author=user)
    
    def perform_update(self, serializer):
        # Only allow updating if the user is the author of the data
        if self.get_object().author != self.request.user:
            raise PermissionDenied("You do not have permission to edit this data.")
        serializer.save()



class StudentDelete(generics.DestroyAPIView):
    serializer_class = StudentSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Student.objects.filter(author=user)
    
    def perform_destroy(self, instance):
        if instance.author != self.request.user:
            raise PermissionDenied("You do not have permission to delete this data.")
        instance.delete()

    

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]





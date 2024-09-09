from django.db import models
from django.contrib.auth.models import User

class Student(models.Model):
    name = models.CharField(max_length=100)
    student_class = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    image = models.ImageField(upload_to='photos/')
    content= models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='students', null=True, blank=True)


    def __str__(self):
        return self.name

    class Meta:
        ordering = ['student_class']  # Order students by class


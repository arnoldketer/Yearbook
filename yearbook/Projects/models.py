from django.db import models
from students.models import Student #Import the Student Model

# Create your models here.

class Project(models.Model):
    student = models.ForeignKey(Student, on_delete= models.CASCADE, related_name='Projects')
    title = models.CharField(max_length=200)
    description = models.TextField()
    year = models.IntegerField()
    image = models.ImageField(upload_to='project_images/', blank=True, null=True)
    view_url = models.URLField(max_length=200, blank=True, null=True)
    source_url = models.URLField(max_length=200, blank=True, null=True)

    def __str__(self):
        return self.title
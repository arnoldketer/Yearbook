# Projects/serializers.py
from rest_framework import serializers
from .models import Project

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['id', 'student', 'title', 'description', 'year', 'image', 'view_url', 'source_url']  # Include all relevant fields
        read_only_fields=['student']

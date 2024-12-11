from django.db import models

class React(models.Model):
    Student = models.CharField(max_length=30)
    Department = models.CharField(max_length=200)

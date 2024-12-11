from django.contrib import admin
from .models import React

@admin.register(React)
class ReactAdmin(admin.ModelAdmin):
    list_display = ('Student', 'Department')


# Register your models here.

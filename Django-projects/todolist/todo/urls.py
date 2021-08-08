from django.shortcuts import redirect
from django.urls import path
from .views import index, delete

urlpatterns = [
    path('', index, name='index'),
    path('<int:id>/delete', delete, name='delete')
]


from django.http.response import HttpResponse
from django.shortcuts import redirect
from shortner.models import Url
import uuid
from django.urls import path
from .views import index, create, go

urlpatterns = [
    path('', index, name='index'),
    path('create', create, name='create'),
    path('<str:pk>', go, name='go')
]


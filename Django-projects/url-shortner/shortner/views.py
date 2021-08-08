from django.conf.urls import url
from django.http.response import HttpResponse
from django.shortcuts import redirect, render,HttpResponse
import uuid

from .models import Url

# Create your views here.
def index(request):
    return render(request, 'index.html')

def create(request):
    if request.method == 'POST':
        url = request.POST['link']
        uid = str(uuid.uuid4())[:5]
        new_url = Url(link=url, uuid=uid)
        new_url.save()
        return HttpResponse(uid)

def go(request, pk):
    #get url details through the id assigned to it
    url_details = Url.objects.get(uuid=pk)
    return redirect('https://' + url_details.link)

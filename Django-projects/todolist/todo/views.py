from django.http import request
from django.http.response import HttpResponse
from django.shortcuts import redirect, render
from .models import Todo

# Create your views here.
def index(request):
    if request.method == 'POST':
        new_todo = Todo(
            title = request.POST['title']
            )
        new_todo.save()
        
    todo = Todo.objects.all()
    context = {
        'todos': todo
    }
    return render(request, 'index.html', context)


def delete(request, id):
    todo = Todo.objects.get(id=id)
    todo.delete()
    return redirect('/')
    

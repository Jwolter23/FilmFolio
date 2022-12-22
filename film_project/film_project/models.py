from django.db import models

# Create your models here.

class User(models.Model):
    first_name = models.CharField(max_length=100, default='no name')
    last_name = models.CharField(max_length=100, default='no location')
    email = models.CharField(max_length=100, default='no division')
    password = models.CharField(max_length=100, default='no wins')
    username = models.CharField(max_length=100, default='no username')
    
    
    def __str__(self):
        return self.first_name

class Movie(models.Model):
    title = models.CharField(max_length=100, default='no name')
    genre = models.CharField(max_length=100, default='no location')
    description = models.CharField(max_length=100, default='no division')
    release_year = models.CharField(max_length=100, default='no wins')
    director = models.CharField(max_length=100, default='no wins')
    actor = models.CharField(max_length=100, default='no wins')
    avg_score = models.CharField(max_length=100, default='no wins')
    photo_url = models.CharField(max_length=100, default='no wins')
    has_watched = models.BooleanField()
    user = models.ManyToManyField(User, related_name='user')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='movies')
    
    
    def __str__(self):
        return self.title

class Review(models.Model):
    username = models.CharField(max_length=100, default='no name')
    title = models.CharField(max_length=100, default='no location')
    body = models.CharField(max_length=100, default='no division')
    rating = models.CharField(max_length=100, default='no wins')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='reviews')
    game = models.ForeignKey(Movie, on_delete=models.CASCADE, related_name='reviews')
    
    
    def __str__(self):
        return self.username
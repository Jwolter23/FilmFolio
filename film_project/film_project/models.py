from django.db import models

# Create your models here.

class User(models.Model):
    first_name = models.CharField(max_length=100, default='no first name')
    last_name = models.CharField(max_length=100, default='no last name')
    email = models.CharField(max_length=100, default='no email')
    password = models.CharField(max_length=100, default='no password')
    username = models.CharField(max_length=100, default='no username')
    
    
    def __str__(self):
        return self.first_name

class Movie(models.Model):
    title = models.CharField(max_length=100, default='no title')
    genre = models.CharField(max_length=100, default='no genre')
    description = models.CharField(max_length=2000, default='no description')
    release_year = models.CharField(max_length=100, default='no release year')
    director = models.CharField(max_length=100, default='no director')
    actor = models.CharField(max_length=100, default='no actor')
    avg_score = models.CharField(max_length=100, default='no average score')
    photo_url = models.CharField(max_length=1000, default='no photo url')
    cover_url = models.CharField(max_length=1000, default='no cover url')
    has_watched = models.BooleanField()
    star_rating = models.IntegerField(default=1)
    user = models.ManyToManyField(User, related_name='user')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='movies')
    
    
    def __str__(self):
        return self.title

class Review(models.Model):
    username = models.CharField(max_length=100, default='no username')
    title = models.CharField(max_length=100, default='no title')
    body = models.CharField(max_length=100, default='no body')
    rating = models.CharField(max_length=100, default='no rating')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='reviews')
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE, related_name='reviews')
    
    
    def __str__(self):
        return self.username
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
    has_watched = models.CharField(max_length=100, default='no has watched')
    star_rating = models.IntegerField(default=1)
    user = models.ManyToManyField(User, related_name='user')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='movies')
    
    
    def __str__(self):
        return self.title

class Review(models.Model):
    username = models.CharField(max_length=100, default='no username', null=True)
    title = models.CharField(max_length=100, default='no title', null=True)
    body = models.CharField(max_length=500, default='no body', null=True)
    rating = models.DecimalField(max_digits=2, decimal_places=1, null=True)
    profile_url = models.CharField(max_length=250, default='no pic', null= True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='reviews', null=True)
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE, related_name='reviews', null=True)
    
    
    def __str__(self):
        return self.username
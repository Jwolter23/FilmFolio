from django.db import models

# Create your models here.
class User(models.Model):
    first_name = models.CharField(max_length=256)
    last_name = models.CharField(max_length=256)
    email = models.EmailField(max_length=256, blank=True, null=True)
    username = models.CharField(max_length=256)
    password = models.CharField(max_length=1024)

    def __str__(self):
        return self.name 


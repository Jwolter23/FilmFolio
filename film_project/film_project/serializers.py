from rest_framework import serializers
from .models import User, Movie, Review



class ReviewSerializer(serializers.HyperlinkedModelSerializer):
    users = serializers.HyperlinkedRelatedField(
        view_name = 'user_detail',
        read_only=True
    )
    movies = serializers.HyperlinkedRelatedField(
        view_name = 'movie_detail',
        read_only=True
    )

    class Meta:
        model = Review
        fields = ('id', 'username', 'title', 'body', 'rating', 'profile_url', 'movie', 'users', 'movies')
        
class MovieSerializer(serializers.HyperlinkedModelSerializer):
    reviews = ReviewSerializer(
        many=True,
        read_only=True
    )
    users = serializers.HyperlinkedRelatedField(
        view_name = 'user_detail',
        many = True,
        read_only = True
    )

    class Meta:
        model = Movie
        fields = ('id', 'title', 'genre', 'description', 'release_year', 'director', 'actor', 'avg_score', 'photo_url', 'cover_url', 'has_watched', 'star_rating', 'reviews', 'users')

class UserSerializer(serializers.HyperlinkedModelSerializer):
    reviews = ReviewSerializer(
        many=True,
        read_only=True
    ),
    movies = MovieSerializer(
        many=True,
        read_only=True
    )

    class Meta: 
        model = User
        fields = ('id', 'first_name', 'last_name', 'email', 'password', 'username', 'movies', 'reviews')
from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('users/', views.UserList.as_view(), name='user_list'),
    path('users/<int:pk>', views.UserDetail.as_view(), name='user_detail'),
    path('movies/', views.MovieList.as_view(), name='movie-detail'),
    path('movies/<int:pk>', views.MovieDetail.as_view(), name='movie-detail'),
    path('reviews/', views.ReviewList.as_view(), name='review-list'),
    path('reviews/<int:pk>', views.ReviewDetail.as_view(), name='review-detail'),
    path('reviewspost/', views.ReviewPost.as_view(), name='review_detail'),
    path('reviewsupdate/<int:pk>', views.ReviewUpdate.as_view(), name='review_detail'),
    path('reviewsdelete/<int:pk>', views.ReviewDelete.as_view(), name='review_detail'),
    path('moviesupdate/<int:pk>', views.MovieUpdate.as_view(), name='review_detail'),
]
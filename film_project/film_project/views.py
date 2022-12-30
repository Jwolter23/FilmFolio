from rest_framework import generics
from django.shortcuts import render
from .serializers import UserSerializer, MovieSerializer, ReviewSerializer
from .models import User, Movie, Review
from rest_framework.response import Response

# Create your views here.

class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class MovieList(generics.ListAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer

class MovieDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer

class ReviewPost(generics.RetrieveUpdateDestroyAPIView):
    def get(self, request):
        reviewObj=Review.objects.all()
        reviewSerializeObj=ReviewSerializer(reviewObj,many=True)
        return Response(reviewSerializeObj.data)
    
    def post(self,request):
        serializeobj=ReviewSerializer(data=request.data)
        if serializeobj.is_valid():
            serializeobj.save()
            return Response(200)
        return Response(serializeobj.errors)

class ReviewUpdate(generics.RetrieveUpdateDestroyAPIView):
    def post(self,request,pk):
        try:
            reviewObj=Review.objects.get(pk=pk)
        except:
            return Response("Not found in database")

        serializeobj=ReviewSerializer(reviewObj,data=request.data)
        if serializeobj.is_valid():
            serializeobj.save()
            return Response(200)
        return Response(serializeobj.errors)

class ReviewDelete(generics.RetrieveUpdateDestroyAPIView):
    def post(self,request,pk):
        try:
            reviewObj=Review.objects.get(pk=pk)
        except:
            return Response("Not found in database")
        reviewObj.delete()
        return Response(200)

class ReviewList(generics.ListCreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

class ReviewDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

class ReviewList(generics.ListCreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

class ReviewDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
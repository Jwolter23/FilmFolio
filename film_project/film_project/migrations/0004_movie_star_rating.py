# Generated by Django 4.1.4 on 2022-12-28 18:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('film_project', '0003_rename_game_review_movie_movie_cover_url_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='movie',
            name='star_rating',
            field=models.IntegerField(default=1),
        ),
    ]

#!/usr/bin/env python3

class MovieService:
    
    def __init__(self, movie_store=None):
        self.movie_store = movie_store
    
    def get_movies_by_language(self, language=None):
        movie_list = []
        for movie in self.movie_store:
            if movie.get('language') == language:
                movie_list.append(movie)
            
        return movie_list
#!/usr/bin/env python3

class MovieService:
    
    def __init__(self, movie_store=None):
        self.movie_store = movie_store
    def get_movies_by_year(self, year):
        return [movie for movie in self.movie_store if movie['year'] == year]    
    def get_movies_by_language(self, language=None):
        return [movie for movie in self.movie_store if movie['language'] == language]
        movie_list = []
        for movie in self.movie_store:
            if movie.get('language') == language:
                movie_list.append(movie)
            
        return movie_list
    
    def movie_service_handler(self, year=None, language=None):
        if year == None and language==None or year and language:
            raise Exception
        
        if year:
            return self.get_movies_by_year(year)
        
        if language:
            return self.get_movies_by_language(language)
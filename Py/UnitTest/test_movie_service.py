#!/usr/bin/env python3

from movie_service import MovieService
from parameterized import parameterized  
from datetime import datetime
from unittest import TestCase
from unittest.mock import patch


class TestMovieService(TestCase):
    def setUp(self) -> None:
        self.movie_store = [{'name': 'KGF-2', 'language': 'Kannada', 'year': '2022'},
                            {'name':'Robezrt', 'language': 'Kannada', 'year': '2021'},
                            {'name': 'Spiderftan: No way home', 'language': 'English', 'year': '2021'},
                            {'name': 'Doctor Strange', 'language': 'English', 'year': '2022'},]
    def tearDown(self) -> None:
        return super().tearDown()

    @parameterized.expand([
        (None, None),
        ('2022', 'Kannada'),
        ('2021', 'Hindi'),
        ('2011', 'English')
    ])
    def test_invalid_input(self, year, language):
        service = MovieService(self.movie_store)
        with self.assertRaises(Exception):
            service.movie_service_handler(year, language)
            
    @parameterized.expand([
            ('2022', None),
            ('2021', None),
            ('2011', None)
    ])
    @patch('movie_service.MovieService.get_movies_by_year')
    def test_movie_handler_year_input(self, year, language, mock_movies_getter):
            service = MovieService(self.movie_store)
            service.movie_service_handler(year, language)
            mock_movies_getter.assert_called_once()
            
        
    @parameterized.expand([
            (None, 'Kannada'),
            (None, 'Tamil'),
            (None, 'Hindi')
    ])
    @patch('movie_service.MovieService.get_movies_by_language')
    def test_movie_handler_language_input(self, year, language, mock_movies_getter):
            service = MovieService(self.movie_store)
            service.movie_service_handler(year, language)
            mock_movies_getter.assert_called_once()
<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\userController;
use App\Http\Controllers\BookController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register', [userController::class, 'register']);
Route::post('login', [userController::class, 'login']);
Route::post('book', [BookController::class, 'bookapp']);
Route::get('bookList', [BookController::class, 'booklist']);
Route::delete('delete/{id}', [BookController::class, 'delete']);


<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('index');
});
Route::get('/posts', function () {
    return view('posts');
});
Route::get('/posts/create', function () {
    return view('create');
});
Route::get('/posts/{id}/edit', function () {
    return view('edit');
});

<?php

use App\Http\Controllers\PostIndexController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/posts', PostIndexController::class);

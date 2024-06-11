<?php

use App\Http\Controllers\imcController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/imc', [imcController::class, 'index']);

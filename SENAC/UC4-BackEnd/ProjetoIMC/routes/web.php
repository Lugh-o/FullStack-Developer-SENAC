<?php

use App\Http\Controllers\imcController;
use App\Http\Controllers\notaController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/imc', [imcController::class, 'index']);
 
Route::get('/nota', [notaController::class, 'index']);
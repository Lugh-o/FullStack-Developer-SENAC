<?php

use App\Http\Controllers\imcController;
use App\Http\Controllers\notaController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/imc', [imcController::class, 'index']);
 
Route::get('/nota', [notaController::class, 'index'])->name('nota.index');
Route::post('/nota', [notaController::class, 'create'])->name('nota.create');
Route::put('/nota/{student}', [notaController::class, 'update'])->name('nota.update');
Route::delete('/nota/{student}', [notaController::class, 'delete'])->name('nota.delete');



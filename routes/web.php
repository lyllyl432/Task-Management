<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\TaskController;
use Illuminate\Support\Facades\Route;



Route::middleware('guest')->group(function () {
    Route::resource('login', LoginController::class);
    Route::resource('register', RegisterController::class);
});

Route::middleware('auth')->group(function () {
    Route::resource('task', TaskController::class);
    Route::post('/logout', [LoginController::class, 'destroy'])->name('logout');
});

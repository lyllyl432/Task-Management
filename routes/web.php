<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\TaskController;
use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return redirect()->route('login.index');
});
Route::middleware('guest')->group(function () {
    Route::resource('register', RegisterController::class);
    Route::resource('login', LoginController::class);
});

Route::middleware('auth')->group(function () {
    Route::resource('task', TaskController::class);
    Route::get('/logout', [LoginController::class, 'destroy'])->name('logout');
    // Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
});

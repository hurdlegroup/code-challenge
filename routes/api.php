<?php

use App\Http\Controllers\API\TrainingSessionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function () {
    Route::controller(TrainingSessionController::class)->prefix('training-sessions')->group(function () {
        Route::get('/', 'index');
        Route::post('', 'store');
    });

    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});

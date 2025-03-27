<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\TaskController;


/*
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
*/

Route::prefix('v1')->group(function(){
	Route::prefix('auth')->group(function(){
		Route::post('register', [AuthController::class, 'Register']);
		Route::post('login', [AuthController::class, 'Login']);
	});
	
	Route::prefix('user')->middleware('auth:sanctum')->group(function(){
		Route::prefix('task')->group(function(){
			Route::get('/{id?}', [TaskController::class, 'Show']);
			Route::post('/', [TaskController::class, 'Store']);
			Route::put('/{id}', [TaskController::class, 'Update']);
			Route::delete('/{id}', [TaskController::class, 'Delete']);
		});
	});
});
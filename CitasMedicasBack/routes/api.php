<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\MedicoController;

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

Route::prefix('medico')->group(function (){
    Route::get('/',[MedicoController::class,'getAll']);
    Route::post('/',[MedicoController::class,'create']);
    Route::delete('/{id_medico}',[MedicoController::class,'delete']);
    Route::get('/{id_medico}',[MedicoController::class,'get']);
    Route::put('/{id_medico}',[MedicoController::class,'update']);

});

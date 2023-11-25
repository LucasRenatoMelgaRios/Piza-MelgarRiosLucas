<?php

use App\Http\Controllers\API\OrdenController;
use App\Http\Controllers\API\ProductosController;
use App\Http\Controllers\API\UsuariosController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::controller(ProductosController::class)
    ->prefix("productos")
    ->group(function () {
        Route::get("/index", "index");
        Route::get("/show/{id_producto}", "show");
    });
Route::controller(UsuariosController::class)
    ->prefix("usuario")
    ->group(function () {
        Route::get("/index", "index");
        Route::post("/store", "store");
        Route::post("/login", "Login");
        Route::get("/show/{id_usuario}", "show");
    });
    Route::controller(OrdenController::class)
    ->prefix("ordern")
    ->group(function () {
        Route::get("/index", "index");
        Route::post("/store", "store");
    });
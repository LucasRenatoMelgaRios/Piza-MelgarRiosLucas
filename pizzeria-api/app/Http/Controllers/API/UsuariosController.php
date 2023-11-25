<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateUsuario;
use App\Http\Requests\LoginUsuario;
use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class UsuariosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Usuario::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateUsuario $request)
    {
        Usuario::create($request->all());
        return response()->json([
            "success" => true,
            "message" => "Usuario registrado"
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function Login(LoginUsuario $request)
    {
        $usuario = Usuario::where("correo", $request->correo)->first();

        if (!$usuario) {
            throw ValidationException::withMessages([
                "success" => false,
                "message" => ["Las credenciales son incorrectas!!!"]
            ]);
        }
        return response()->json([
            "success" => true,
            "message" => "Usuario logueado",
            "item" => $usuario
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function show(int $id_usuario)
    {
        return Usuario::where("id_usuario", $id_usuario)
        ->get();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}

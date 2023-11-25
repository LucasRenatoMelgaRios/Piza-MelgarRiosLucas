<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    use HasFactory;
    protected $table = "usuarios";

    protected $primaryKey = "id_usuario";

    protected $fillable = [
        "id_usuario",
        "nombre",
        "apellidos",
        "dni",
        "direccion",
        "telefono",
        "password",
        "correo"
    ];

    protected $hidden = [];
    public $timestamps = false; // Desactivar marcas de tiempo automáticamente

}

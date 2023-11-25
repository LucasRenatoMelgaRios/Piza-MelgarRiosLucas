<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    use HasFactory;
    protected $table = "productos";

    protected $primaryKey = "id_producto";

    protected $fillable = [
        "id_producto",
        "nombre",
        "descripcion",
        "modelo",
        "imagen",
    ];

    protected $hidden = [];
    public $timestamps = false; // Desactivar marcas de tiempo automáticamente

}

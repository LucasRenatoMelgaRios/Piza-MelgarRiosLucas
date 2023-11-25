<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Orden extends Model
{
    use HasFactory;
    protected $table = "ordens";

    protected $primaryKey = "id_orden";

    protected $fillable = [
        "id_orden",
        "id_producto",
        "id_usuario",
        "created_at",
        "updated_at"
    ];

    protected $hidden = [];
        public function productos()
    {
        return $this->belongsTo(Producto::class, 'id_producto', 'id_producto');
    }
    public function usuarios()
    {
        return $this->belongsTo(Usuario::class, 'id_usuario', 'id_usuario');
    }
}

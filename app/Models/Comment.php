<?php

namespace App\Models;
use Illuminate\Database\Eloquent\SoftDeletes;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;
    use SoftDeletes;

    public function task(){
        return $this->belongsToMany(Task::class);
    }

    public function user(){
        return $this->belongsTo(User::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ExpenseRecord extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'last_record',
        'month',
        'year',
    ];
}

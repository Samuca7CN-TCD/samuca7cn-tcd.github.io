<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('buffet_plates', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('description')->nullable();
            $table->double('price');
            $table->integer('qtd_per_ten_people');
            $table->unsignedBigInteger('buffet_entry_id')->nullable();
            $table->unsignedBigInteger('buffet_id')->nullable();
            $table->softDeletes();
            $table->timestamps();
            $table->foreign('buffet_entry_id')->references('id')->on('buffet_entries');
            $table->foreign('buffet_id')->references('id')->on('buffets');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('buffet_plates');
    }
};
<?php

use Illuminate\Support\Facades\Route;

Route::get('/{page?}/{sub_page?}', function () {
    return view('welcome');
});

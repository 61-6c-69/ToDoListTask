<?php

use Illuminate\Support\Facades\Route;

Route::get('/{page?}/{sub_page?}/{id?}', function () {
    return view('welcome');
});

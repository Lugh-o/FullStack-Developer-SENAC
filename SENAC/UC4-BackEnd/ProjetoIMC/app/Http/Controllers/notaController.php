<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class notaController extends Controller
{
    public function index(){
        return view("nota.index");
    }
}

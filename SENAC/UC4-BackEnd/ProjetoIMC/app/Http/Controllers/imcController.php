<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class imcController extends Controller
{
    public function index(){
        return view("imc.index");
    }
    
}

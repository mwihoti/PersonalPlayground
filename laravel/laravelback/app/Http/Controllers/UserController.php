<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    //
    function register(Request $req)
    {
        $user= new User;
        $user->name= $req->input('name');
        $user->Email=$req->input('Email');
        $user->Password= hash::make($req->input('Password'));
        $user-> save();
        return $user;
        
    }
    function login(Request $req)
    {
        $user= User::where('Email', $req->Email)->first();
        if(!$user || !Hash::check($req->Password, $user->Password))
        {
            return ["error"=>"Email or password is not matched"];
        }
        return $user;
        
        
    }
}

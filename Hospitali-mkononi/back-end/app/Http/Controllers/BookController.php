<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;

class BookController extends Controller
{
    //

    function bookapp (Request $req){
        
        $book = new Book;
        $book->name=$req->input('name');
        $book->age=$req->input('age');
        $book->email=$req->input('email');
        $book->phone=$req->input('phone');
        // Convert the date to a format PHP understands
        $time = strtotime($req->input('time'));

        // Format the date for MySQL datetime format (Y-m-d H:i:s)
        $formattedTime = date('Y-m-d H:i:s', $time);

        $book->time = $formattedTime;
        $book->description=$req->input('description');
        $book->save();

        return $book;
    }

    function bookList ()
    {
        return Book::all();
    }

    function delete($id)
    {
        $del = Book::where('id', $id) -> delete();
        if($del)
        {
            return ["Book" =>"Book has been revoked"];
        }
        else {
            return ["Book" =>"No Book to Revoke"];
        }
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\LoaiSanPham;
use App\SanPham;
use Auth;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (Auth::check()) {
            $loaisp = LoaiSanPham::select('idLoai')->get();
            $sanpham = SanPham::select('idSP', 'idLoai')->get();
            return view('admin.pages.index', compact('loaisp', 'sanpham'));
        }
        else {
            return redirect()->route('login');
        }
    }
}

?>

 
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    //
	public function Register(RegisterRequest $request): JsonResponse{
		$user = User::create($request->only('name', 'email', 'password'));
		
		return response()->json([
			'status' => 'success',
			'user' => $user
		], Response::HTTP_CREATED);
	}
	
	public function Login(Request $request): JsonResponse{
		return [];
	}
}

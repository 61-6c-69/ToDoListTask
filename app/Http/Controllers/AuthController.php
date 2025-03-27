<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\LoginRequest;
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
	
	public function Login(LoginRequest $request): JsonResponse{
		if(!auth()->attempt($request->only('email', 'password'))){
			return response()->json([
				'status' => 'unauthorize',
				'message' => 'Email or Password wrong.'
			], Response::HTTP_UNAUTHORIZED);
		}
		
		$user = auth()->user();
		
		$user->tokens()->delete();
		
		$token = $user->createToken(config('app.name'))->plainTextToken;
		
		return response()->json([
			'status' => 'success',
			'token' => $token,
			'user' => $user
		], Response::HTTP_OK);
	}
}

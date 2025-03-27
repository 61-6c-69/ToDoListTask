<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\JsonResponse;
use App\Models\Tasks;
use App\Http\Requests\TaskRequest;

class TaskController extends Controller
{
    //
	public function Store(TaskRequest $request): JsonResponse{
		$task = auth()->user()->tasks()->create($request->all());
		
		return response()->json([
			'task' => $task
		], Response::HTTP_CREATED);
	}
	
	public function Show(){
		return;
	}
	
	public function Update(){
		return;
	}
	
	public function Delete(){
		return;
	}
}

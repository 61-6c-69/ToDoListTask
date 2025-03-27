<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\JsonResponse;
use App\Models\Tasks;
use App\Http\Requests\TaskRequest;
use App\Http\Resources\TaskResource;

class TaskController extends Controller
{
    //
	public function Store(TaskRequest $request): JsonResponse{
		$task = auth()->user()->tasks()->create($request->all());
		
		return response()->json([
			'task' => $task
		], Response::HTTP_CREATED);
	}
	
	public function Show(Request $request): JsonResponse{
		$tasks = auth()->user()->tasks();
		
		if($request->id){
			$tasks->where('id', $request->id);
		}
		
		return response()->json([
			'tasks' => TaskResource::collection($tasks->latest()->get())
		], Response::HTTP_OK);
	}
	
	public function Update(Request $request): JsonResponse{
		$update = auth()
			->user()
			->tasks()
			->where('id', $request->id)
			->update(
				$request->only('title', 'description', 'due_date', 'priority')
			);
		
		return response()->json([
			'status' => 'success'
		], Response::HTTP_OK);
	}
	
	public function Delete(Request $request){
		$delete = auth()->user()->tasks()->find($request->id);
		
		if(!$delete){
			return response()->json([
				'status' => 'error'
			], Response::HTTP_NOT_FOUND);
		}
		
		$delete->delete();
		
		return response()->json([
			'status' => 'success'
		], Response::HTTP_OK);
	}
}

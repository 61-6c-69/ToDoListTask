<?php

namespace App\Jobs;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use App\Models\Tasks;

class DueDateTaskCompleted implements ShouldQueue
{
    use Queueable;

	protected $task;
	
    /**
     * Create a new job instance.
     */
    public function __construct(Tasks $task)
    {
        //
		$this->task = $task;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
		$this->task->update(['status' => 'completed']);
    }
}

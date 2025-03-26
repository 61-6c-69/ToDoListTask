<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Tasks>
 */

use App\Models\User;
class TasksFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
			'user_id' => User::inRandomOrder()->first()->id,
			'title'   => fake()->sentence(5),
			'description' => fake()->sentence(10),
			'status' => fake()->randomElement(['pending', 'progress', 'completed']),
			'due_date' => fake()->dateTimeBetween('now', '+2 months'),
			'priority' => fake()->randomElement(['low', 'medium', 'high']),
        ];
    }
}

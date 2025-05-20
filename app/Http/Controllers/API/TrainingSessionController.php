<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\TrainingSession;
use Illuminate\Support\Facades\Auth;

class TrainingSessionController extends Controller
{
    public function index()
    {
        return Auth::user()->trainingSessions()->latest()->get();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'starts_at' => 'required|date',
            'duration_minutes' => 'required|integer|min:1',
        ]);

        $session = Auth::user()->trainingSessions()->create($validated);

        return response()->json($session, 201);
    }
}

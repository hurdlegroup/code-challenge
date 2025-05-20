<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class TrainingSessionController extends Controller
{
    public function index()
    {
        return Inertia::render('TrainingSessions/Index', [
            'sessions' => Auth::user()->trainingSessions()->latest()->get(),
        ]);
    }
}

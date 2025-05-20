# hurdle – Code Challenge

Welcome! This is a short technical challenge for candidates applying to hurdle.

This repository is scaffolded with **Laravel Jetstream** and **Vue 3** to save you time.
You'll complete a small set of tasks involving backend and frontend work.
If you have time and interest, feel free to explore bonus tasks too.

This should take roughly 1 hour and should demonstrate **YOUR** skill, please do not use AI at any point to complete this exercise.

---

## 🧠 Goal

Create a simple training session management feature. The goal is to demonstrate your full-stack development ability using Laravel and Vue 3.

---

## ✅ Requirements

### 1. Backend – Laravel (Sanctum API)
- Complete the `TrainingSession` model and migration
- Implement the `POST /api/training-sessions` endpoint (already scaffolded)
- Implement `GET /api/training-sessions` to return all training sessions for the authenticated user

### 2. Frontend – Vue 3
- Update `resources/js/Pages/TrainingSessions.vue` to:
    - Display a list of sessions
    - Create new sessions via a form
- Use Vue3 Composition API, Axios, components available in Jetstream, and if needed you can build your own

### 3. TypeScript Utility
- The function `getTotalDuration()` in `resources/ts/utils/session.ts` calculates the total duration of a session array
- Add/edit the provided test in `session.test.ts` if needed

---

## 🌟 Bonus (Optional)

You may complete any of the following at your discretion, but may help us get a better idea of your technical understanding:
- ✅ Add form validation and error handling
- ✅ Sort sessions by date or filter future sessions
- ✅ Add pagination or UI enhancements
- ✅ Add test coverage (Laravel or Vue/TS)
- ✅ Add GitHub Actions CI
- ✅ Add a `Makefile` or helper script
- ✅ Write an `ARCHITECTURE.md` explaining your design choices

---

## 🚀 Getting Started

### Requirements
- Docker
- Docker Compose
- Laravel Sail (already installed via Composer)

### Setup (Using Laravel Sail)

Run the following to get started:

```bash
# Copy the environment file
cp .env.example .env

# Build and start the Sail containers
./vendor/bin/sail up -d

# Generate app key and run migrations
./vendor/bin/sail artisan key:generate
./vendor/bin/sail artisan migrate:fresh --seed

# Install and build frontend assets
./vendor/bin/sail npm install
./vendor/bin/sail npm run dev
```

Once running, you can access the app at:

```
http://localhost
```

You may need to update `APP_URL` and DB credentials in .env if using a different port or database configuration.

You can login with email `test@example.com` and password `password`.

---

## 🧪 Testing

```bash
# Run backend tests
./vendor/bin/sail artisan test

# Run TypeScript utility tests
./vendor/bin/sail npm run test
# or
./vendor/bin/sail npx vitest run
```

---

## 📦 Submission

1. Clone this repository and complete your changes
2. Push your changes to a private GitHub repository
3. Include this `README.md` with any additional notes
4. Share access with us at `developer@hurdle.live`

---

## 🙌 Thank You

We appreciate your time and look forward to seeing your work. Good luck!

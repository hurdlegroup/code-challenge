import { getTotalDuration, TrainingSession } from './training-session'

const trainingSessions: TrainingSession[] = [
  { title: 'Session A', starts_at: '2024-05-01T10:00:00', duration_minutes: 30 },
  { title: 'Session B', starts_at: '2024-05-01T11:00:00', duration_minutes: 60 }
];

test('calculates total duration', () => {
  expect(getTotalDuration(trainingSessions)).toBe(90)
})

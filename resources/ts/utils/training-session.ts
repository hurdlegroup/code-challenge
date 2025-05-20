export interface TrainingSession {
  title: string;
  starts_at: string;
  duration_minutes: number;
}

export function getTotalDuration(trainingSessions: TrainingSession[]): number {
  return trainingSessions.reduce((sum, trainingSession) => sum + trainingSession.duration_minutes, 0);
}

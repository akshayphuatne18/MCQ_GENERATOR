import { Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const weekDays = [
  { id: 'mon', label: 'M' },
  { id: 'tue', label: 'T' },
  { id: 'wed', label: 'W' },
  { id: 'thu', label: 'T' },
  { id: 'fri', label: 'F' },
  { id: 'sat', label: 'S' },
  { id: 'sun', label: 'S' },
];
const streakData = [1, 1, 0, 1, 1, 1, 0]; // 1 = completed, 0 = missed

export function StreakCard() {
  return (
    <Card className="col-span-2">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">Daily Streak</CardTitle>
        <Calendar className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold mb-4">5 Days</div>
        <div className="flex justify-between">
          {weekDays.map((day, i) => (
            <div key={day.id} className="text-center">
              <div className="text-sm text-muted-foreground mb-2">{day.label}</div>
              <div
                className={cn(
                  'w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110',
                  streakData[i]
                    ? 'bg-green-500/20 dark:bg-green-500/30 text-green-600 dark:text-green-400'
                    : 'bg-muted'
                )}
              >
                {streakData[i] ? '✓' : '·'}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
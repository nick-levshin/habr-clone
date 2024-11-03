import { CounterScheme } from '@/entities/Counter';
import { UserScheme } from '@/entities/User';
import { LoginScheme } from '@/features/AuthByUsername';

export interface StateSchema {
  counter: CounterScheme;
  user: UserScheme;
  loginForm?: LoginScheme;
}

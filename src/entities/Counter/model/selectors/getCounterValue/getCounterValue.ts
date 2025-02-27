import { buildSelector } from '@/shared/lib/store';

export const [useCouterValue, getCounterValue] = buildSelector((state) => state.counter.value);

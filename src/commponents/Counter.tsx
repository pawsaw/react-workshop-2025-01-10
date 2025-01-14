export interface CounterProps {
  count: number;
  onCountChanged: (count: number) => void;
}

export const Counter: React.FC<CounterProps> = ({ count, onCountChanged }) => {
  const increment = () => {
    onCountChanged(count + 1);
  };

  return <button onClick={increment}>{count}</button>;
};

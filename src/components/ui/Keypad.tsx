import React from 'react';
import Button from '@/components/ui/Button';
import { X, CornerDownLeft } from 'lucide-react';

interface KeypadProps {
  onNumberClick: (num: number) => void;
  onDelete: () => void;
  onSubmit: () => void;
  disabled: boolean;
}

const Keypad: React.FC<KeypadProps> = ({ onNumberClick, onDelete, onSubmit, disabled }) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <div className="grid grid-cols-3 gap-2">
      {numbers.map((num) => (
        <Button
          key={num}
          onClick={() => onNumberClick(num)}
          variant="secondary"
          className="aspect-square text-2xl"
          disabled={disabled}
        >
          {num}
        </Button>
      ))}
      <Button onClick={onDelete} variant="secondary" className="aspect-square" disabled={disabled}>
        <X />
      </Button>
      <Button onClick={onSubmit} variant="primary" className="aspect-square" disabled={disabled}>
        <CornerDownLeft />
      </Button>
    </div>
  );
};

export default Keypad;
import React from 'react';
import { X } from 'lucide-react';
import { ModalProps } from '@/types';
import Button from '@/components/ui/Button';

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-md m-4 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h2>
          <Button variant="ghost" size="sm" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </Button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;

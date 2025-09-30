// Fix: Import React to make its types available in this file.
import React from 'react';
import { TFunction } from 'i18next';

export enum GameMode {
  Guess,
  Result,
}

export interface GuessResult {
  guess: number[];
  strikes: number;
  balls: number;
}

export interface GameHistoryProps {
  guesses: GuessResult[];
  secretCode: number[];
  t: TFunction;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export interface ResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  isHomerun: boolean;
  secretCode: number[];
}

// Global type definition for window.ethereum
declare global {
  interface Window {
    ethereum?: any;
  }
}

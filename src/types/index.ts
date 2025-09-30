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

  // Manually define types for `import.meta.env` as a workaround for
  // `vite/client` type resolution issues. This provides type safety for
  // environment variables throughout the application.
  interface ImportMetaEnv {
    readonly VITE_WLD_APP_ID: `app_${string}`;
    readonly VITE_WLD_ACTION_ID: string;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

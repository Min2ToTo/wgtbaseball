import React from 'react';
import { useTranslation } from 'react-i18next';
import Modal from '@/components/ui/Modal';
import Button from '@/components/ui/Button';
import { useGame } from '@/contexts/GameContext';
import { REWARD_AMOUNT } from '@/constants';
import { ResultModalProps } from '@/types';

const ResultModal: React.FC<ResultModalProps> = ({ isOpen, onClose, isHomerun, secretCode }) => {
  const { t } = useTranslation();
  const { claimReward, isLoading } = useGame();

  const handleClaim = async () => {
    await claimReward();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={isHomerun ? t('homerun') : t('strike-out')}>
      <div className="text-center">
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          {isHomerun
            ? t('congratulations-homerun', { reward: REWARD_AMOUNT })
            : t('unlucky-strike-out', { secretCode: secretCode.join('') })}
        </p>
        {isHomerun ? (
          <Button onClick={handleClaim} disabled={isLoading}>
            {isLoading ? t('claiming') : t('claim-reward')}
          </Button>
        ) : (
          <Button onClick={onClose}>{t('close')}</Button>
        )}
      </div>
    </Modal>
  );
};

export default ResultModal;
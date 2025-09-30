export const resources = {
  en: {
    translation: {
      // General
      'wgt-baseball': 'WGT Baseball',
      'close': 'Close',

      // Main Screen
      'start-game': 'Start Game',
      'how-to-play': 'How to Play',
      'settings': 'Settings',
      'achievements': 'Achievements',
      'ranking': 'Ranking',
      'connect-wallet': 'Connect Wallet',
      'wallet-connected': 'Wallet Connected',
      'your-balance': 'Your Balance',

      // Game Screen
      'guess-the-number': 'Guess the {{length}}-digit number',
      'guess': 'Guess',
      'new-game': 'New Game',
      'guesses-left': 'Guesses Left: {{count}}',
      'history': 'History',

      // Result Modal
      'homerun': 'Homerun!',
      'strike-out': 'Strike Out!',
      'congratulations-homerun': 'Congratulations! You guessed the number correctly. You earned {{reward}} WGT.',
      'unlucky-strike-out': 'Unfortunately, you couldn\'t guess the number. The number was {{secretCode}}.',
      'claim-reward': 'Claim Reward',
      'reward-claimed': 'Reward Claimed',
      'claiming': 'Claiming...',

      // Help Modal
      'game-rules-title': 'Game Rules',
      'rules-1': 'The computer generates a secret {{length}}-digit number with no repeating digits.',
      'rules-2': 'You have {{maxGuesses}} attempts to guess the number.',
      'rules-3': 'After each guess, you will get feedback in the form of strikes and balls.',
      'rules-strike': 'Strike (S): A digit is correct and in the correct position.',
      'rules-ball': 'Ball (B): A digit is correct but in the wrong position.',
      'rules-out': 'Out (O): A digit is not in the secret number at all.',
      'rules-homerun': 'Homerun: You win by guessing the number correctly (e.g., 3S).',
      'rules-strike-out': 'Strike Out: You lose if you fail to guess the number within {{maxGuesses}} attempts.',
    },
  },
  ko: {
    translation: {
      // General
      'wgt-baseball': 'WGT 숫자야구',
      'close': '닫기',

      // Main Screen
      'start-game': '게임 시작',
      'how-to-play': '게임 방법',
      'settings': '설정',
      'achievements': '업적',
      'ranking': '랭킹',
      'connect-wallet': '지갑 연결',
      'wallet-connected': '지갑 연결됨',
      'your-balance': '내 잔액',

      // Game Screen
      'guess-the-number': '{{length}}자리 숫자를 맞혀보세요',
      'guess': '추측',
      'new-game': '새 게임',
      'guesses-left': '남은 기회: {{count}}',
      'history': '기록',

      // Result Modal
      'homerun': '홈런!',
      'strike-out': '스트라이크 아웃!',
      'congratulations-homerun': '축하합니다! 숫자를 정확히 맞혔습니다. {{reward}} WGT를 획득했습니다.',
      'unlucky-strike-out': '아쉽게도 숫자를 맞히지 못했습니다. 정답은 {{secretCode}}였습니다.',
      'claim-reward': '보상 받기',
      'reward-claimed': '보상 수령 완료',
      'claiming': '요청 중...',

      // Help Modal
      'game-rules-title': '게임 규칙',
      'rules-1': '컴퓨터가 중복되지 않는 {{length}}자리 비밀 숫자를 생성합니다.',
      'rules-2': '숫자를 맞힐 기회는 총 {{maxGuesses}}번입니다.',
      'rules-3': '각 추측 후에는 스트라이크와 볼 형태로 힌트가 주어집니다.',
      'rules-strike': '스트라이크 (S): 숫자와 위치가 모두 정확합니다.',
      'rules-ball': '볼 (B): 숫자는 맞지만 위치가 틀렸습니다.',
      'rules-out': '아웃 (O): 숫자가 비밀 숫자에 포함되어 있지 않습니다.',
      'rules-homerun': '홈런: 숫자를 정확히 맞히면(예: 3S) 승리합니다.',
      'rules-strike-out': '스트라이크 아웃: {{maxGuesses}}번의 기회 안에 숫자를 맞히지 못하면 패배합니다.',
    },
  },
};

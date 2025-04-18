import { Theme } from '@src/main';

export const getProgressCss = (theme: Theme): string => {
  return `
  .cb-progress-container {
  width: 100%;
  height: 4px;
  background-color: #e9ecef;
  border-radius: 2px;
  overflow: hidden;
}

.cb-timer {  
  transition: width 50ms linear;
}

.cb-progress-bar {
  height: 100%;
  background-color: #0d6efd;  
}

@keyframes progress {
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
}
  
  
  `;
};

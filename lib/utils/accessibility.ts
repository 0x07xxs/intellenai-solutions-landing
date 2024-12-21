export const skipToContent = (e: React.KeyboardEvent) => {
  if (e.key === 'Enter') {
    const main = document.querySelector('main');
    if (main) {
      main.focus();
      main.scrollIntoView();
    }
  }
};

export const handleKeyboardNavigation = (
  e: React.KeyboardEvent,
  callback: () => void
) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    callback();
  }
};
declare global {
  interface Window {
    Telegram: {
      WebApp: {
        viewportStableHeight: number;
        onEvent: (event: string, callback: () => void) => void;
        offEvent: (event: string, callback: () => void) => void;
      };
    };
  }
}

export {};

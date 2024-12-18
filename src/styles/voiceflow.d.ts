interface VoiceflowChat {
    load: (config: any) => void;
    destroy: () => void;
  }
  
  interface Voiceflow {
    chat: VoiceflowChat;
  }
  
  declare global {
    interface Window {
      voiceflow?: Voiceflow;
    }
  }
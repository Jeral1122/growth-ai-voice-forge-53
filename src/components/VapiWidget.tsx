
import React, { useState, useEffect, forwardRef, useRef } from 'react';
import Vapi from '@vapi-ai/web';

interface VapiWidgetProps {
  apiKey: string;
  assistantId: string;
  config?: Record<string, unknown>;
}

const VapiWidget = forwardRef<any, VapiWidgetProps>(({
  apiKey,
  assistantId,
  config = {}
}, ref) => {
  const [vapi, setVapi] = useState<Vapi | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState<Array<{
    role: string;
    text: string;
  }>>([]);
  
  const transcriptRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    if (transcriptRef.current) {
      transcriptRef.current.scrollTop = transcriptRef.current.scrollHeight;
    }
  }, [transcript]);

  useEffect(() => {
    const vapiInstance = new Vapi(apiKey);
    setVapi(vapiInstance);

    // Event listeners
    vapiInstance.on('call-start', () => {
      console.log('Call started');
      setIsConnected(true);
      setIsConnecting(false);
    });
    vapiInstance.on('call-end', () => {
      console.log('Call ended');
      setIsConnected(false);
      setIsConnecting(false);
      setIsSpeaking(false);
    });
    vapiInstance.on('speech-start', () => {
      console.log('Assistant started speaking');
      setIsSpeaking(true);
    });
    vapiInstance.on('speech-end', () => {
      console.log('Assistant stopped speaking');
      setIsSpeaking(false);
    });
    vapiInstance.on('message', message => {
      if (message.type === 'transcript') {
        setTranscript(prev => [...prev, {
          role: message.role,
          text: message.transcript
        }]);
      }
    });
    vapiInstance.on('error', error => {
      console.error('Vapi error:', error);
      setIsConnecting(false);
    });
    return () => {
      vapiInstance?.stop();
    };
  }, [apiKey]);

  const startCall = () => {
    console.log('Starting call with assistant:', assistantId);
    if (vapi) {
      setIsConnecting(true);
      vapi.start(assistantId);
    }
  };

  const endCall = () => {
    console.log('Ending call');
    if (vapi) {
      vapi.stop();
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {!isConnected && !isConnecting ? (
        <button 
          onClick={startCall}
          className="w-full bg-gradient-to-r from-neon-green to-gold hover:from-neon-green/90 hover:to-gold/90 text-charcoal font-montserrat font-bold py-4 px-8 rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-neon-green/25 flex items-center justify-center gap-3 border-2 border-neon-green/20"
        >
          <div className="w-6 h-6 bg-charcoal/20 rounded-full flex items-center justify-center">
            🎤
          </div>
          <span className="text-lg">Talk to AI Assistant</span>
        </button>
      ) : isConnecting ? (
        <div className="w-full bg-gradient-to-r from-neon-green to-gold text-charcoal font-montserrat font-bold py-4 px-8 rounded-xl shadow-2xl flex items-center justify-center gap-3 border-2 border-neon-green/20">
          <div className="w-6 h-6 bg-charcoal/20 rounded-full flex items-center justify-center animate-pulse">
            🔄
          </div>
          <span className="text-lg">Connecting to Assistant...</span>
        </div>
      ) : (
        <div className="bg-charcoal/90 backdrop-blur-lg border border-neon-green/20 rounded-xl p-6 shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                isSpeaking ? 'bg-red-500 animate-pulse' : 'bg-neon-green'
              }`}></div>
              <span className="font-montserrat font-semibold text-white">
                {isSpeaking ? 'Assistant Speaking...' : 'Listening...'}
              </span>
            </div>
            <button 
              onClick={endCall}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-open-sans text-sm transition-colors duration-300"
            >
              End Call
            </button>
          </div>
          
          <div 
            ref={transcriptRef}
            className="max-h-48 overflow-y-auto mb-3 p-3 bg-gray-900/50 rounded-lg border border-gray-700 scroll-smooth"
          >
            {transcript.length === 0 ? (
              <p className="text-gray-400 font-open-sans text-sm text-center py-4">
                Conversation will appear here...
              </p>
            ) : (
              transcript.map((msg, i) => (
                <div key={i} className={`mb-3 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <span className={`inline-block px-4 py-2 rounded-lg max-w-[80%] font-open-sans text-sm ${
                    msg.role === 'user' 
                      ? 'bg-neon-green text-charcoal' 
                      : 'bg-gray-700 text-white'
                  }`}>
                    {msg.text}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
});

VapiWidget.displayName = 'VapiWidget';

export default VapiWidget;

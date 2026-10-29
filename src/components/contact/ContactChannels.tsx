import React from 'react';
import { MessageSquare, Send, Code2 } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function ContactChannels() {
  return (
    <div className="space-y-4">
      <div className="font-mono-tech text-xs uppercase tracking-[0.18em] text-[var(--ash)]">
        O escríbenos directo por aquí
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Button href="https://wa.me/56900000000" external variant="secondary" size="sm">
          <MessageSquare className="w-3.5 h-3.5 text-[var(--hanko)]" />
          <span>WhatsApp Directo</span>
        </Button>

        <Button href="https://t.me/kaibutsu_dev" external variant="secondary" size="sm">
          <Send className="w-3.5 h-3.5 text-[var(--ash)]" />
          <span>Telegram</span>
        </Button>

        <Button href="https://github.com/Kaibutsu" external variant="secondary" size="sm">
          <Code2 className="w-3.5 h-3.5 text-[var(--ash)]" />
          <span>GitHub</span>
        </Button>
      </div>
    </div>
  );
}

import React from 'react';
import { MessageSquare, Send, Code2 } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function ContactChannels() {
  return (
    <div className="space-y-4">
      <div className="text-xs uppercase tracking-wider text-[var(--mist)] font-medium">
        O escríbenos directo por aquí
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Button
          href="https://wa.me/56936549761?text=Hola%20Kaibutsu,%20me%20gustar%C3%ADa%20conversar%20sobre%20un%20proyecto"
          external
          variant="katana"
          size="sm"
        >
          <MessageSquare className="w-3.5 h-3.5 text-[#ff4d6d]" />
          <span>WhatsApp (+56 9 3654 9761)</span>
        </Button>

        <Button href="https://t.me/kaibutsu_dev" external variant="secondary" size="sm">
          <Send className="w-3.5 h-3.5 text-[var(--mist)]" />
          <span>Telegram</span>
        </Button>

        <Button href="https://github.com/KaibutsuDev" external variant="secondary" size="sm">
          <Code2 className="w-3.5 h-3.5 text-[var(--mist)]" />
          <span>GitHub: KaibutsuDev</span>
        </Button>
      </div>
    </div>
  );
}

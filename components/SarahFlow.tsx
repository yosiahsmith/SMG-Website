'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const stages = [
  ['INBOUND CALL','A customer calls your business. Sarah answers immediately.','↗'],
  ['SARAH ANSWERS','She greets the caller, understands why they called, and keeps the conversation moving.','◉'],
  ['QUALIFY','Sarah gathers the information your team needs before the opportunity reaches a human.','◎'],
  ['BOOK OR CONNECT','She books the appointment or routes the conversation to your team when a human is needed.','↔'],
  ['APPOINTMENT SET','The caller gets a clear next step. Your team gets a cleaner conversation.','✓'],
];

export default function SarahFlow() {
  const [step, setStep] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [startX, setStartX] = useState<number | null>(null);
  const stage = stages[step];

  const advance = () => {
    setStep(current => Math.min(current + 1, stages.length - 1));
    setDragX(0);
  };

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    setStartX(event.clientX);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (startX === null || step === stages.length - 1) return;
    const dx = Math.max(0, Math.min(160, event.clientX - startX));
    setDragX(dx);
    if (dx > 120) {
      setStartX(null);
      advance();
    }
  };

  const reset = () => {
    setStartX(null);
    setDragX(0);
  };

  return (
    <div className="hero-system" aria-label="Interactive Sarah Automatic Receptionist workflow">
      <div className="system-label">SARAH / AUTOMATIC RECEPTIONIST / LIVE WORKFLOW</div>
      <div className="flow-phone">
        <div className="flow-phone-top"><span>SMG</span><span>INBOUND</span></div>
        <div className="flow-screen">
          <div className="flow-progress"><span style={{ width: ((step + 1) / stages.length) * 100 + '%' }} /></div>
          <div className="flow-stage">
            <div className="flow-icon">{stage[2]}</div>
            <div className="flow-count">{String(step + 1).padStart(2, '0')} / 05</div>
            <h3>{stage[0]}</h3>
            <p>{stage[1]}</p>
          </div>
        </div>
        {step < stages.length - 1 && (
          <>
            <div className="flow-answer" onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={reset} onPointerCancel={reset}>
              <span className="flow-answer-track">
                <span className="flow-answer-knob" style={{ transform: `translateX(${dragX}px)` }}>›</span>
                <span className="flow-answer-track-label">SWIPE RIGHT</span>
              </span>
            </div>
            <button type="button" className="flow-next" onClick={advance}>Tap to continue <ArrowRight size={15} /></button>
          </>
        )}
      </div>
      <p className="flow-caption">Swipe through the conversation to see how Sarah moves a call toward an outcome.</p>
    </div>
  );
}

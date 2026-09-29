'use client';

import { useState } from 'react';
import { RotateCcw } from 'lucide-react';

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
  const [animating, setAnimating] = useState(false);
  const stage = stages[step];

  const advance = () => {
    if (step >= stages.length - 1 || animating) return;
    setAnimating(true);
    setTimeout(() => {
      setStep(current => Math.min(current + 1, stages.length - 1));
      setDragX(0);
      setAnimating(false);
    }, 180);
  };

  const startOver = () => { setStep(0); setDragX(0); setStartX(null); };

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (step === stages.length - 1 || animating) return;
    setStartX(event.clientX);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (startX === null || step === stages.length - 1 || animating) return;
    const trackTravel = 162;
    const dx = Math.max(0, Math.min(trackTravel, event.clientX - startX));
    setDragX(dx);
  };

  const resetDrag = () => {
    if (startX !== null) {
      const trackTravel = 162;
      if (dragX >= trackTravel) {
        advance();
      } else {
        setDragX(0);
        setStartX(null);
      }
    }
  };

  return (
    <div className="hero-system" aria-label="Interactive Sarah Automatic Receptionist workflow">
      <div className="system-label">SARAH / AUTOMATIC RECEPTIONIST / LIVE WORKFLOW</div>
      <div className="flow-panel">
        <div className="flow-progress"><span style={{ width: ((step + 1) / stages.length) * 100 + '%' }} /></div>
        <div className="flow-stage-wrap">
          <div className={`flow-stage ${animating ? 'flow-stage-exit' : 'flow-stage-enter'}`} key={step}>
            <div className="flow-icon">{stage[2]}</div>
            <div className="flow-count">{String(step + 1).padStart(2, '0')} / 05</div>
            <h3 className="flow-word-reveal">{stage[0].split(' ').map((word, index) => <span key={word + index} style={{ animationDelay: `${index * 145}ms` }}>{word}</span>)}</h3>
            <p className="flow-word-reveal flow-description">{stage[1].split(' ').map((word, index) => <span key={word + index} style={{ animationDelay: `${280 + index * 70}ms` }}>{word}</span>)}</p>
          </div>
        </div>
        <div className="flow-action-slot">
          {step < stages.length - 1 ? (
            <div className="flow-answer" onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={resetDrag} onPointerCancel={resetDrag}>
              <span className="flow-answer-track"><span className={`flow-answer-knob ${startX !== null ? "flow-answer-knob-dragging" : ""}`} style={{ transform: `translateX(${dragX}px)` }}>›</span><span className="flow-answer-track-label" style={{ opacity: dragX > 0 ? Math.max(0, 1 - dragX / 72) : 1 }}>SWIPE RIGHT</span></span>
            </div>
          ) : (
            <button type="button" className="flow-restart" onClick={startOver}><RotateCcw size={13} /> Start over</button>
          )}
        </div>
      </div>
    </div>
  );
}
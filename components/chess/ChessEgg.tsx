'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Chess } from 'chess.js';
import styles from './ChessEgg.module.css';

type Promotion = 'q' | 'r' | 'b' | 'n';
type Move = { from: string; to: string; promotion?: Promotion; san?: string; captured?: string; flags?: string };
const files = ['a','b','c','d','e','f','g','h'];
const START_FEN = new Chess().fen();
const pawnPath='M12 3c-2 0-3 2-3 4 0 1 .5 2 1.5 2.7C8 10.5 6 13 6 16h12c0-3-2-5.5-4.5-6.3C14.5 9 15 8 15 7c0-2-1-4-3-4Zm-5 15h10v3H7z';
const glyph:Record<string,string>={r:'♜',n:'♞',b:'♝',q:'♛',k:'♚'};
function PieceIcon({type,color}:{type:string;color:'w'|'b'}){if(type==='p')return <svg className={`${styles.piece} ${color==='w'?styles.whitePiece:styles.blackPiece}`} viewBox="0 0 24 24" aria-hidden="true"><path d={pawnPath}/></svg>;return <span className={`${styles.pieceGlyph} ${color==='w'?styles.whitePiece:styles.blackPiece}`} aria-hidden="true">{glyph[type]}</span>}
function cloneGame(fen:string){return new Chess(fen)}

export default function ChessEgg({onClose}:{onClose:()=>void}){
 const [fen,setFen]=useState(START_FEN);
 const [selected,setSelected]=useState<string|null>(null);
 const [promotion,setPromotion]=useState<Move|null>(null);
 const [status,setStatus]=useState('Your move.');
 const [thinking,setThinking]=useState(false);
 const [lastMove,setLastMove]=useState<{from:string;to:string}|null>(null);
 const timer=useRef<number|null>(null);
 const game=useMemo(()=>cloneGame(fen),[fen]);
 const board=game.board();
 const legal=useMemo(()=>selected&&game.turn()==='w'?game.moves({square:selected as any,verbose:true}) as Move[]:[],[game,selected]);
 const legalTargets=new Set(legal.map(m=>m.to));
 useEffect(()=>()=>{if(timer.current!==null)window.clearTimeout(timer.current)},[]);
 const scheduleBlackMove=(baseFen:string)=>{
   if(timer.current!==null)window.clearTimeout(timer.current);
   timer.current=window.setTimeout(()=>{
     timer.current=null;
     const g=cloneGame(baseFen);
     if(g.turn()!=='b'||g.isGameOver())return;
     const moves=g.moves({verbose:true}) as Move[];
     if(!moves.length){setThinking(false);return}
     const captures=moves.filter(m=>Boolean(m.captured));
     const checks=moves.filter(m=>m.san?.includes('+')||m.san?.includes('#'));
     const pool=checks.length?checks:(captures.length?captures:moves);
     const choice=pool[Math.floor(Math.random()*pool.length)];
     try{
       const played=g.move({from:choice.from,to:choice.to,promotion:choice.promotion||'q'});
       setFen(g.fen());
       setLastMove({from:played.from,to:played.to});
       setSelected(null);
       setPromotion(null);
       if(g.isCheckmate()){setStatus('Checkmate — Solomon wins.');setThinking(false);return}
       if(g.isStalemate()){setStatus('Stalemate.');setThinking(false);return}
       if(g.isThreefoldRepetition()){setStatus('Draw — threefold repetition.');setThinking(false);return}
       if(g.isDrawByFiftyMoves()){setStatus('Draw — 50-move rule.');setThinking(false);return}
       if(g.isInsufficientMaterial()){setStatus('Draw — insufficient material.');setThinking(false);return}
       setThinking(false);
       setStatus(g.inCheck()?'Check — your king is attacked.':'Your move.');
     }catch{
       setThinking(false);setStatus('Your move.');
     }
   },420);
 };
 const commitPlayerMove=(move:Move)=>{
   try{
     const g=cloneGame(fen);
     const played=g.move({from:move.from,to:move.to,promotion:move.promotion});
     setFen(g.fen());
     setLastMove({from:played.from,to:played.to});
     setSelected(null);
     setPromotion(null);
     if(g.isCheckmate()){setStatus('Checkmate — you win.');setThinking(false);return}
     if(g.isStalemate()){setStatus('Stalemate.');setThinking(false);return}
     if(g.isThreefoldRepetition()){setStatus('Draw — threefold repetition.');setThinking(false);return}
     if(g.isDrawByFiftyMoves()){setStatus('Draw — 50-move rule.');setThinking(false);return}
     if(g.isInsufficientMaterial()){setStatus('Draw — insufficient material.');setThinking(false);return}
     setThinking(true);
     setStatus(g.inCheck()?'Check — Solomon is in check.':'Solomon is thinking…');
     scheduleBlackMove(g.fen());
   }catch{setSelected(null);setPromotion(null);}
 };
 const choose=(square:string)=>{
   if(thinking||promotion||game.isGameOver()||game.turn()!=='w')return;
   const piece=game.get(square as any);
   if(selected){
     const move=legal.find(m=>m.to===square);
     if(move){
       if(move.promotion){setPromotion(move);return}
       commitPlayerMove(move);return;
     }
     setSelected(piece?.color==='w'?square:null);return;
   }
   if(piece?.color==='w')setSelected(square);
 };
 const promote=(type:Promotion)=>{
   if(!promotion||thinking||game.turn()!=='w')return;
   commitPlayerMove({...promotion,promotion:type});
 };
 const reset=()=>{
   if(timer.current!==null)window.clearTimeout(timer.current);
   timer.current=null;
   setFen(START_FEN);setSelected(null);setPromotion(null);setLastMove(null);setThinking(false);setStatus('Your move.');
 };
 return <div className={styles.overlay} onMouseDown={e=>e.target===e.currentTarget&&onClose()}><div className={styles.modal}>
   <button className={styles.close} onClick={onClose} aria-label="Close chess">×</button>
   <div className={styles.top}><div><span className={styles.kicker}>SOLOMON</span><h2>Chess.</h2><p>{status}</p></div><button className={styles.reset} onClick={reset}>New game</button></div>
   <div className={styles.board} role="grid" aria-label="Chess board">
    {board.map((row,r)=>row.map((piece,c)=>{const square=`${files[c]}${8-r}`;const isLast=lastMove?.from===square||lastMove?.to===square;const isSelected=selected===square;const isTarget=legalTargets.has(square);return <button key={square} className={`${styles.square} ${(r+c)%2?styles.dark:styles.light} ${isLast?styles.last:''} ${isSelected?styles.selected:''} ${isTarget?styles.target:''}`} onClick={()=>choose(square)} aria-label={square}>{piece&&<PieceIcon type={piece.type} color={piece.color}/>}</button>}))}
   </div>
   {promotion&&<div className={styles.promotion}><span>Promote pawn</span><div>{(['q','r','b','n'] as Promotion[]).map(type=><button key={type} onClick={()=>promote(type)} aria-label={`Promote to ${type}`}><PieceIcon type={type} color="w"/></button>)}</div></div>}
   <div className={styles.note}>A hidden game for the curious. Nothing more. Nothing less.</div>
 </div></div>
}

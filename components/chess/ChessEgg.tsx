'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './ChessEgg.module.css';

type Color='w'|'b'; type Kind='p'|'n'|'b'|'r'|'q'|'k';
type Piece={t:Kind;c:Color}; type Sq=[number,number]; type Board=(Piece|null)[][];
type Castle={wK:boolean;wQ:boolean;bK:boolean;bQ:boolean}; type EP=Sq|null;
type Move={from:Sq;to:Sq;promotion?:Kind;castle?:'K'|'Q';enPassant?:boolean};
const back:Kind[]=['r','n','b','q','k','b','n','r'];
const start=():Board=>Array.from({length:8},(_,r)=>Array.from({length:8},(_,c)=>r===0?{t:back[c],c:'b'}:r===1?{t:'p',c:'b'}:r===6?{t:'p',c:'w'}:r===7?{t:back[c],c:'w'}:null));
const inside=(r:number,c:number)=>r>=0&&r<8&&c>=0&&c<8; const other=(c:Color):Color=>c==='w'?'b':'w';
function clone(b:Board){return b.map(row=>row.map(p=>p?{...p}:null))}
function findKing(b:Board,c:Color):Sq|null{for(let r=0;r<8;r++)for(let x=0;x<8;x++)if(b[r][x]?.t==='k'&&b[r][x]?.c===c)return[r,x];return null}
function attacked(b:Board,r:number,c:number,by:Color):boolean{
 const d=by==='w'?-1:1;
 for(const dc of[-1,1]){const rr=r-d,cc=c-dc;if(inside(rr,cc)&&b[rr][cc]?.c===by&&b[rr][cc]?.t==='p')return true}
 for(const[dr,dc]of[[2,1],[2,-1],[-2,1],[-2,-1],[1,2],[1,-2],[-1,2],[-1,-2]]){const rr=r+dr,cc=c+dc;if(inside(rr,cc)&&b[rr][cc]?.c===by&&b[rr][cc]?.t==='n')return true}
 for(const[dr,dc]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){let rr=r+dr,cc=c+dc;while(inside(rr,cc)){const p=b[rr][cc];if(p){if(p.c===by&&((dr===0||dc===0)?(p.t==='r'||p.t==='q'):(p.t==='b'||p.t==='q')))return true;break}rr+=dr;cc+=dc}}
 for(const dr of[-1,0,1])for(const dc of[-1,0,1])if(dr||dc){const rr=r+dr,cc=c+dc;if(inside(rr,cc)&&b[rr][cc]?.c===by&&b[rr][cc]?.t==='k')return true}
 return false;
}
function inCheck(b:Board,c:Color){const k=findKing(b,c);return !!k&&attacked(b,k[0],k[1],other(c))}
function push(out:Move[],b:Board,p:Piece,from:Sq,to:Sq,extra:Partial<Move>={}){const target=b[to[0]][to[1]];if(inside(to[0],to[1])&&(!target||target.c!==p.c)&&target?.t!=='k')out.push({from,to,...extra})}
function pseudo(b:Board,r:number,c:number,castle:Castle,ep:EP):Move[]{
 const p=b[r][c];if(!p)return[];const out:Move[]=[];
 if(p.t==='p'){
  const d=p.c==='w'?-1:1,startRow=p.c==='w'?6:1,promoRow=p.c==='w'?0:7;
  if(inside(r+d,c)&&!b[r+d][c]){if(r+d===promoRow)for(const q of['q','r','b','n'] as Kind[])out.push({from:[r,c],to:[r+d,c],promotion:q});else out.push({from:[r,c],to:[r+d,c]});if(r===startRow&&!b[r+2*d][c])out.push({from:[r,c],to:[r+2*d,c]})}
  for(const dc of[-1,1]){const rr=r+d,cc=c+dc;if(!inside(rr,cc))continue;const target=b[rr][cc];if(target&&target.c!==p.c&&target.t!=='k'){if(rr===promoRow)for(const q of['q','r','b','n'] as Kind[])out.push({from:[r,c],to:[rr,cc],promotion:q});else out.push({from:[r,c],to:[rr,cc]})}else if(ep&&ep[0]===rr&&ep[1]===cc)out.push({from:[r,c],to:[rr,cc],enPassant:true})}
 }else if(p.t==='n')for(const[dr,dc]of[[2,1],[2,-1],[-2,1],[-2,-1],[1,2],[1,-2],[-1,2],[-1,-2]])push(out,b,p,[r,c],[r+dr,c+dc]);
 else if(['b','r','q'].includes(p.t)){const dirs=p.t==='b'?[[1,1],[1,-1],[-1,1],[-1,-1]]:p.t==='r'?[[1,0],[-1,0],[0,1],[0,-1]]:[[1,1],[1,-1],[-1,1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]];for(const[dr,dc]of dirs){let rr=r+dr,cc=c+dc;while(inside(rr,cc)){const target=b[rr][cc];if(!target)out.push({from:[r,c],to:[rr,cc]});else{if(target.c!==p.c&&target.t!=='k')out.push({from:[r,c],to:[rr,cc]});break}rr+=dr;cc+=dc}}}
 else if(p.t==='k'){
  for(const dr of[-1,0,1])for(const dc of[-1,0,1])if(dr||dc)push(out,b,p,[r,c],[r+dr,c+dc]);
  const row=p.c==='w'?7:0;if(r===row&&c===4&&!inCheck(b,p.c)){const k=p.c==='w'?castle.wK:castle.bK,q=p.c==='w'?castle.wQ:castle.bQ;if(k&&b[row][5]===null&&b[row][6]===null&&!attacked(b,row,5,other(p.c))&&!attacked(b,row,6,other(p.c))&&b[row][7]?.t==='r'&&b[row][7]?.c===p.c)out.push({from:[r,c],to:[row,6],castle:'K'});if(q&&b[row][1]===null&&b[row][2]===null&&b[row][3]===null&&!attacked(b,row,3,other(p.c))&&!attacked(b,row,2,other(p.c))&&b[row][0]?.t==='r'&&b[row][0]?.c===p.c)out.push({from:[r,c],to:[row,2],castle:'Q'})}}
 return out;
}
function apply(b:Board,m:Move,castle:Castle,ep:EP){const n=clone(b);const p=n[m.from[0]][m.from[1]]!;n[m.from[0]][m.from[1]]=null;n[m.to[0]][m.to[1]]={...p,t:m.promotion||p.t};if(m.enPassant)n[m.to[0]+(p.c==='w'?1:-1)][m.to[1]]=null;if(m.castle){const row=m.from[0],rf=m.castle==='K'?7:0,rt=m.castle==='K'?5:3,rook=n[row][rf];n[row][rf]=null;if(rook)n[row][rt]=rook}return n}
function nextCastle(b:Board,m:Move,c:Castle){const n={...c};const p=b[m.from[0]][m.from[1]];if(!p)return n;if(p.t==='k'){if(p.c==='w'){n.wK=false;n.wQ=false}else{n.bK=false;n.bQ=false}}if(p.t==='r'){if(p.c==='w'&&m.from[0]===7&&m.from[1]===0)n.wQ=false;if(p.c==='w'&&m.from[0]===7&&m.from[1]===7)n.wK=false;if(p.c==='b'&&m.from[0]===0&&m.from[1]===0)n.bQ=false;if(p.c==='b'&&m.from[0]===0&&m.from[1]===7)n.bK=false}const captured=b[m.to[0]][m.to[1]];if(captured?.t==='r'){if(captured.c==='w'&&m.to[0]===7&&m.to[1]===0)n.wQ=false;if(captured.c==='w'&&m.to[0]===7&&m.to[1]===7)n.wK=false;if(captured.c==='b'&&m.to[0]===0&&m.to[1]===0)n.bQ=false;if(captured.c==='b'&&m.to[0]===0&&m.to[1]===7)n.bK=false}return n}
function legalMoves(b:Board,c:Color,castle:Castle,ep:EP){const out:Move[]=[];for(let r=0;r<8;r++)for(let x=0;x<8;x++)if(b[r][x]?.c===c)for(const m of pseudo(b,r,x,castle,ep)){const n=apply(b,m,castle,ep);if(!inCheck(n,c))out.push(m)}return out}
const pawnPath='M12 3c-2 0-3 2-3 4 0 1 .5 2 1.5 2.7C8 10.5 6 13 6 16h12c0-3-2-5.5-4.5-6.3C14.5 9 15 8 15 7c0-2-1-4-3-4Zm-5 15h10v3H7z';
const glyph:Record<Exclude<Kind,'p'>,string>={r:'♜',n:'♞',b:'♝',q:'♛',k:'♚'};
function PieceIcon({p}:{p:Piece}){if(p.t==='p')return <svg className={`${styles.piece} ${p.c==='w'?styles.whitePiece:styles.blackPiece}`} viewBox="0 0 24 24"><path d={pawnPath}/></svg>;return <span className={`${styles.pieceGlyph} ${p.c==='w'?styles.whitePiece:styles.blackPiece}`}>{glyph[p.t]}</span>}
function promotionPiece(m:Move,c:Kind):Move{return {...m,promotion:c}}
export default function ChessEgg({onClose}:{onClose:()=>void}){
 const [b,setB]=useState(start);const [sel,setSel]=useState<Sq|null>(null);const [turn,setTurn]=useState<Color>('w');const [castle,setCastle]=useState<Castle>({wK:true,wQ:true,bK:true,bQ:true});const [ep,setEp]=useState<EP>(null);const [status,setStatus]=useState('Your move.');const [promotion,setPromotion]=useState<Move|null>(null);const timer=useRef<number|null>(null);
 useEffect(()=>()=>{if(timer.current)window.clearTimeout(timer.current)},[]);
 const finishMove=(m:Move)=>{const mover=turn,nb=apply(b,m,castle,ep),nc=nextCastle(b,m,castle);const nep=(b[m.from[0]][m.from[1]]?.t==='p'&&Math.abs(m.to[0]-m.from[0])===2)?[(m.from[0]+m.to[0])/2,m.from[1]] as Sq:null;setB(nb);setCastle(nc);setEp(nep);setSel(null);setPromotion(null);const next=other(mover),lm=legalMoves(nb,next,nc,nep),check=inCheck(nb,next);if(!lm.length){setTurn(next);setStatus(check?`Checkmate — ${mover==='w'?'you win':'Solomon wins'}.`:'Stalemate.');return}setTurn(next);setStatus(check?'Check.':'Solomon is thinking…');if(next==='b')timer.current=window.setTimeout(()=>{const ms=legalMoves(nb,'b',nc,nep);if(!ms.length)return;const captures=ms.filter(x=>x.enPassant||!!nb[x.to[0]][x.to[1]]);const pool=captures.length?captures:ms;let mv=pool[Math.floor(Math.random()*pool.length)];if(mv.promotion)mv={...mv,promotion:'q'};const after=apply(nb,mv,nc,nep),ac=nextCastle(nb,mv,nc),aep=(nb[mv.from[0]][mv.from[1]]?.t==='p'&&Math.abs(mv.to[0]-mv.from[0])===2)?[(mv.from[0]+mv.to[0])/2,mv.from[1]] as Sq:null;setB(after);setCastle(ac);setEp(aep);const human=legalMoves(after,'w',ac,aep),chk=inCheck(after,'w');setTurn('w');setStatus(!human.length?(chk?'Checkmate — Solomon wins.':'Stalemate.'):(chk?'Check.':'Your move.'));},360)};
 const choose=(r:number,c:number)=>{if(turn!=='w'||promotion)return;const p=b[r][c];if(sel){const options=legalMoves(b,'w',castle,ep).filter(m=>m.from[0]===sel[0]&&m.from[1]===sel[1]),m=options.find(x=>x.to[0]===r&&x.to[1]===c);if(m){if(m.promotion)setPromotion(m);else finishMove(m);return}setSel(p?.c==='w'?[r,c]:null);return}if(p?.c==='w')setSel([r,c])};
 const reset=()=>{setB(start());setSel(null);setTurn('w');setCastle({wK:true,wQ:true,bK:true,bQ:true});setEp(null);setPromotion(null);setStatus('Your move.')};
 const selectedMoves=sel?legalMoves(b,'w',castle,ep).filter(m=>m.from[0]===sel[0]&&m.from[1]===sel[1]):[];
 return <div className={styles.overlay} onMouseDown={e=>e.target===e.currentTarget&&onClose()}><div className={styles.modal}><button className={styles.close} onClick={onClose}>×</button><div className={styles.top}><div><span className={styles.kicker}>SOLOMON</span><h2>Chess.</h2><p>{status}</p></div><button className={styles.reset} onClick={reset}>New game</button></div><div className={styles.board} role="grid" aria-label="Chess board">{b.map((row,r)=>row.map((p,c)=><button key={`${r}-${c}`} className={`${styles.square} ${(r+c)%2?styles.dark:styles.light} ${sel?.[0]===r&&sel?.[1]===c?styles.selected:''} ${selectedMoves.some(m=>m.to[0]===r&&m.to[1]===c)?styles.target:''}`} onClick={()=>choose(r,c)}>{p&&<PieceIcon p={p}/>}</button>))}</div>{promotion&&<div className={styles.promotion}><span>Promote pawn</span><div>{(['q','r','b','n'] as Kind[]).map(k=><button key={k} onClick={()=>finishMove(promotionPiece(promotion,k))}><PieceIcon p={{t:k,c:'w'}}/></button>)}</div></div>}<div className={styles.note}>A hidden game for the curious. Nothing more. Nothing less.</div></div></div>}

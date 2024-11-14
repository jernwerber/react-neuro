'use client';

import { useState, useContext, useEffect, MouseEventHandler, ReactNode } from 'react';
import { ArrowPathSvg, ChevronUpSvg, EyeSvg, EyeSlashSvg, ChevronRightSvg, ChevronLeftSvg } from './icons';
import { UseOverlayContext } from './client-images';


export function HorizontalControlBar({ overlayPositions, imageCount, imageIndex, imageIndexSetter }:{ overlayPositions?: any[], imageCount: number, imageIndex:number, imageIndexSetter: any }) {

    // to support long presses
    const [clickTimer, setClickTimer] = useState(setInterval(()=>{},5000));

    let interval : any = clickTimer;
    const longPressClickHandler = function(clickAction: any) {    
        return () => {
            clickAction();
            clearInterval(interval);
            interval = setInterval(
                ()=>{
                    clickAction();
                    // console.log(interval)
                }, 100);
            setClickTimer(interval);
        }  
    }

    return (
        <div className="flex justify-between justify-self-center self-end   text-slate-700 bg-white border-2 border-slate-300 px-2 py-2 min-w-[80%] max-w-[600px] gap-6 rounded-full absolute left-0 right-0 bottom-[-2.5em] group-hover:bottom-4"
            style={{
                transition: 'bottom 500ms',
            }}
            >
            <ControlBarButton
                icon={<ChevronLeftSvg />}
                clickHandler={ 
                    longPressClickHandler(
                        ()=>imageIndexSetter( (i: number) => +i-1)
                    )
                }
                unclickHandler={ 
                    ()=>{clearInterval(clickTimer)}        
                }
                title="Forward"
            />
            <ControlBarSlider 
                rangeEnd={ imageCount-1 } 
                currentValue={ imageIndex }
                offset={0}
                valueSetter={ imageIndexSetter }
                overlayPositions={ overlayPositions } 
                />
            <ControlBarButton
                icon={<ChevronRightSvg />}
                clickHandler={ 
                    longPressClickHandler(
                        ()=>imageIndexSetter( (i: number) => +i+1)
                    )
                }
                unclickHandler={ ()=>{clearInterval(clickTimer)} }
                title="Backward" 
            />
        </div>
    );
}

export function ControlBarSlider({rangeStart=0, rangeEnd, currentValue=0, offset=0, valueSetter, overlayPositions}:{rangeStart?: number, rangeEnd: number, currentValue?: number, offset?: number, valueSetter: any, overlayPositions?:any[]}) {
    const overlay= useContext(UseOverlayContext);
    return (
        <div className="relative w-full translate-y-1">
            <div>
            { overlay && overlayPositions && overlayPositions.map((o,i)=><ControlBarMarker 
                key={i} 
                position={(o)/rangeEnd} />)
                }
            </div>
            <input 
                type="range"
                min={ rangeStart }
                max={ rangeEnd }
                value={ currentValue }
                className="cursor-pointer w-full bg-transparent appearance-none webkit-input-range moz-input-range"
                onChange={ (e)=>valueSetter((v:number) => e.target.value )}
                // onChange={ (e)=>{console.log(e.target.clientWidth)}}
            ></input>
        </div>
    )

}

export function ControlBarMarker({position, topOffset="-25px", icon=<EyeSvg sizeClass='size-4' />} : {position:number, topOffset?:string, icon?: any}) {
    return (
        // <div className="absolute min-content border bg-white border-slate-400 rounded-full text-slate-400 origin-center aspect-square w-6 grid justify-center items-center" 
        <div className="absolute min-content border bg-slate-300 rounded-full text-slate-700 origin-center aspect-square w-6 grid justify-center items-center" 
        style={{
            left: `${ position*100 }%`,
            top: `${ topOffset }`,
            // this seems to be very close to correct for spacing
            transform: `translateX(${ -6-position*12.5 }px)`
        }}>{ icon }</div>
    );
}

export function ControlBarButton({ icon, clickHandler, unclickHandler, title } : { icon: ReactNode, clickHandler: MouseEventHandler, unclickHandler: MouseEventHandler, title:string }) {

    return (
        <button className="border-slate-300 bg-slate-300 p-1 rounded-full hover:bg-slate-700 hover:text-white" onMouseDown={ clickHandler } onMouseUp={ unclickHandler } onMouseLeave={ unclickHandler } title={ title }>
            { icon }
        </button>
    );
}



export function ViewControls({view, viewSetter, imageIndexSetter, useOverlaySetter}:{view: string, viewSetter:any, imageIndexSetter: any, useOverlaySetter: any}) {
    const useOverlayContext = useContext( UseOverlayContext );
    const sizeClass = 'size-6';
    return (
        <div className="top-4 right-[-3rem] group-hover:right-4 absolute flex flex-col gap-2 transition-[right] duration-500">
            <VerticalControlBar>

                <ViewSwitchButton 
                    action={ ()=>{ 
                        viewSetter('vertical'); 
                        imageIndexSetter(0); 
                    }}
                    title="Vertical"
                    current={ view=='vertical' }
                    >
                    <ArrowPathSvg sizeClass={ sizeClass } className="mx-auto" />
                </ViewSwitchButton>

                <ViewSwitchButton action={ ()=>{ 
                        viewSetter('sagittal'); 
                        imageIndexSetter(0); 
                    }}
                    title="Sagittal" 
                    current={ view=='sagittal' }
                    >
                    <ArrowPathSvg sizeClass={ sizeClass } className="mx-auto rotate-90" />
                </ViewSwitchButton>

                <ViewSwitchButton action={ ()=>{ 
                        viewSetter('transverse'); 
                        imageIndexSetter(0); 
                    }}
                    title="Frontal" 
                    current={ view=='transverse' }>
                    <ChevronUpSvg sizeClass={ sizeClass } className="mx-auto" />
                </ViewSwitchButton>

                <ViewSwitchButton action={ ()=>{ 
                        viewSetter('transverse_2'); 
                        imageIndexSetter(0); 
                    }}
                    title="Transverse"
                    current={ view=='transverse_2' }
                    >
                    <ChevronUpSvg sizeClass={ sizeClass } className="mx-auto rotate-180" />
                </ViewSwitchButton>

            </VerticalControlBar>
            <VerticalControlBar>
                <ViewSwitchButton action={()=>{ 
                        useOverlaySetter((o:boolean) => !o);
                    }}
                    title={ useOverlayContext? "Hide overlay" : "Show overlay" }>
                    { !useOverlayContext ? <EyeSvg className="mx-auto" /> : <EyeSlashSvg className='mx-auto' />}
                </ViewSwitchButton>
            </VerticalControlBar>
        </div>
    );
}

export function VerticalControlBar( {children}: {children: any} ) {
    return (
            <div className="bg-white border-2 border-slate-300 w-auto gap-3 p-2  rounded-full flex flex-col text-slate-700  isolate">
                { children }
            </div>
    );
}

export function ViewSwitchButton({ children, title, action, current=false }: { children: any, title:string, action?: any, current?:boolean }) {
    return (
        <button onClick={ action } 
            className="w-8 aspect-square bg-slate-300 rounded-full block enabled:hover:bg-slate-700 enabled:hover:text-white disabled:border-2 border-solid border-slate-600" 
            title={ title }
            disabled={ current }
        >
            { children }
        </button>
    )

}
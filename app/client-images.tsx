'use client';

import Image from 'next/image';
import { useState, createContext, useContext, ReactNode } from 'react';
import { HorizontalControlBar, ViewControls } from './client-controls';
import { IMAGESETS } from './data-imagesets';

export const UseOverlayContext = createContext(false);

export type AlternateImage = {
    name: string | number,
    xoff: number,
    yoff: number
}

export type Dimension2D = {
    width: number,
    height: number
}

export type ImageList = {
    appearance?: {backgroundColor?:string, imageScale?:number}
    baseSize:{width: number, height: number},
    baseOffset: {x: number, y: number},
    images: (string | number | [number,number,number])[], 
    overlays?: { [key: string]: AlternateImage }
}
export type ImageListCollection = {
[key: string]: ImageList
}



export function ImageViewer( {viewportSize={width:800,height:600}, startIndex=0} : {viewportSize?: Dimension2D, startIndex?: number} ) {

    const [imageIndex, setImageIndex] = useState(startIndex);
    const [view, setView] = useState('vertical');
    const [overlay, setOverlay] = useState(false);
    const [actualSize, setActualSize ] = useState(100);
 
    const imageSet: ImageList = IMAGESETS[view];
    
    if (imageIndex < 0) {
        setImageIndex(imageSet.images.length-1);
    }
    if (imageIndex > imageSet.images.length-1) {
        setImageIndex(0);
    }

    const images = ImageLoader({imageList: imageSet });
    const viewerBackground = imageSet.appearance && imageSet.appearance.backgroundColor ? imageSet.appearance.backgroundColor : "white";

    // for (const o in imageSet.overlays) {
    //     console.log(o)
    // }
    const overlays = imageSet.overlays && Object.keys(imageSet.overlays).map(
        (o)=> imageSet.images.map((n)=>Array.isArray(n) ? n[0].toString() :
        typeof n === "number" ? n.toString() :
        n).indexOf(o)
    );
    // imageSet.overlays.map((o)=>console.log(o))

    // const overlays = imageSet.overlays && imageSet.overlays
    // if (overlays) {
    //     for (o in overlays)((key:string, m:AlternateImage)=> (imageSet.images.map((n)=>{
    //         Array.isArray(n) ? n[0].toString() :
    //         typeof n === "number" ? n.toString() :
    //         n
    //     }).indexOf(key))) 
    // }
    // console.log(o);

    return (
    <div className="overflow-hidden"
        style={{
            maxHeight: `${ viewportSize.height }px`,
            aspectRatio: viewportSize.width/viewportSize.height,
            backgroundColor: `${ viewerBackground }`
        }}
        >
        <UseOverlayContext.Provider value={ overlay }>
            <OverlayImage scale={imageSet.appearance?.imageScale}>{ images[ imageIndex ]}</OverlayImage>
            <HorizontalControlBar
                overlayPositions={ overlays }
                imageCount={ imageSet.images.length }
                imageIndex={ imageIndex }
                imageIndexSetter={ setImageIndex }
                />
            <ViewControls
                view={ view }
                viewSetter={ setView }
                imageIndexSetter={ setImageIndex }
                useOverlaySetter={ setOverlay }
                />
        </UseOverlayContext.Provider>
    </div>
    );
}

export function ImageLoader( { basePath="/images/", startIndex=0,imageList, extension="jpg"}:{ basePath?: string, startIndex?: number, imageList: ImageList, extension?: string} ) {

    const [calcHeight, setCalcHeight] = useState(imageList.baseSize.height);

    const LoadedImageSet: ReactNode[] = imageList.images.map(
        // entry can either be a string or a list/tuple of [name,xoff,yoff]
        // need to handle string better. getting kind of messy here... 
        (entry:string | number | [number,number,number]) => 
            <>
                <Image
                    priority={ true }
                    src={`${basePath}${(typeof entry === 'number') ? entry.toString() : entry[0]}.${extension}`}
                    alt='' height={ imageList.baseSize.height } width={ imageList.baseSize.width }
                    onLoad={(e:any) => setCalcHeight(e.target.height)}
                    className={`mx-auto -mb-3`}
                    style={{ objectPosition:`
                        ${(+imageList.baseOffset.x+(Array.isArray(entry)? entry[1]:0)).toString()}px 
                        ${(+imageList.baseOffset.y+(Array.isArray(entry)? entry[2]:0)).toString()}px
                        `}}
                /> 
                { 
                // definitely load the first image and then try to load the overlay if it exists
                imageList.overlays && imageList.overlays[getImageKey(entry)] && <Image 
                    priority={ true }
                    src={`${basePath}${(typeof imageList.overlays[getImageKey(entry)].name === 'number') ? imageList.overlays[getImageKey(entry)].name.toString() : imageList.overlays[getImageKey(entry)].name}.${extension}`}
                    alt='' height={ imageList.baseSize.height } width={ imageList.baseSize.width} 
                    className={`mx-auto -mb-3 opacity-100 transition-[opacity] duration-500 absolute`}
                    style={{ 
                        objectPosition:`
                        ${(+imageList.baseOffset.x+imageList.overlays[getImageKey(entry)].xoff).toString()}px 
                        ${(+imageList.baseOffset.y+imageList.overlays[getImageKey(entry)].yoff).toString()}px
                        `,
                        transform:`translateY(-${calcHeight-12}px)`}}
                />
                }
            </>
        );
    return LoadedImageSet;
}

function getImageKey( imageEntry: string | number | [number,number,number] ) : string {
    if (typeof imageEntry === "number") 
        { return imageEntry.toString(); }
    else if (typeof imageEntry === "string") 
        { return imageEntry; }
    else 
        { return imageEntry[0].toString(); }
}

export function OverlayImage({ scale=1, children } : { scale?:number, children:any }) {
    const useOverlayContext = useContext( UseOverlayContext );
    // console.log(children.props);
    return (
        <div className="group" style={{ scale: scale}}>
            {children.props.children[0]}
            { useOverlayContext && children.props.children[1] }
        </div>
    );
}
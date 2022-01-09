import React from 'react'

export const useProgressiveImg = (lowQualitySrc, highQualitySrc) => {
    const [src, setSrc] = React.useState(lowQualitySrc);
    React.useEffect(() => {
        if(lowQualitySrc.length>3){
            setSrc(lowQualitySrc);
            const img = new Image();
            img.src = highQualitySrc;
            img.onload = () => {
                setSrc(highQualitySrc);
            };
        }
    }, [lowQualitySrc, highQualitySrc]);
    return [src, { blur: src === lowQualitySrc }];
};
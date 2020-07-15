// import React, { FC, useEffect } from 'react';
// import { FontFacesProviderProps } from './FontFacesProviderProps';
// import { createFontResources } from '../utilityfunctions/createFontResources';
// import { emulateFontFaces } from '../utilityfunctions/emulateFontFaces';

// export const FontFacesProvider: FC<FontFacesProviderProps> = props => {
//   const { fontFaces, children, onFontsLoaded, nativeFontLoader } = props;

//   useEffect(() => {
//     emulateFontFaces(fontFaces);
//   }, [fontFaces]);

//   useEffect(() => {
//     if (nativeFontLoader) {
//       nativeFontLoader(createFontResources(fontFaces))
//         .catch(err => console.warn(err))
//         .finally(() => onFontsLoaded?.());
//     } else {
//       onFontsLoaded?.();
//     }
//   }, [fontFaces, nativeFontLoader]);

//   return <>{children}</>;
// };
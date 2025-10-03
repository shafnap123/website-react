// // src/context/GlobalContext.js
// import { createContext, useContext, useState } from "react";

// const GlobalContext = createContext();

// export const GlobalProvider = ({ children }) => {
//   const [image, setImage] = useState(null); 
//   const [productData, setProductData] = useState({}); 

//   return (
//     <GlobalContext.Provider value={{ image, setImage, productData, setProductData }}>
//       {children}
//     </GlobalContext.Provider>
//   );
// };

// // /
// export const useGlobal = () => useContext(GlobalContext);

import {useState, useEffect, createContext} from "react";

export const GlobalContext = createContext();

export function GlobalProvider({children}) {

	const [blogs, setBlogs] = useState([]);

	const [pageHeader, setPageHeader] = useState(null);

	return (
		<GlobalContext.Provider value={{blogs, setBlogs, pageHeader, setPageHeader}}>
			{children}
		</GlobalContext.Provider>
	);
}
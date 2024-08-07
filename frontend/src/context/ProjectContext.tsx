import { createContext, useReducer } from "react";

export const ProjectContext = createContext({});

export const projectsReducer = (state: any, action: any) => {
    switch (action.type) {
        case "SET_PROJECTS":
            return { projects: action.payload };
        case "CREATE_PROJECT":
            return { projects: [action.payload, ...state.projects] };
        default:
            return state;
    }
};

export const ProjectContextProvider = ({ children }: { children: any }) => {
    const [state, dispatch] = useReducer(projectsReducer, {
        projects: null,
    });

    return (
        <ProjectContext.Provider value={{ ...state, dispatch }}>
            {children}
        </ProjectContext.Provider>
    );
};
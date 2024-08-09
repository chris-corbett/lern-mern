import { createContext, useReducer } from "react";

const projects: any = [];
const dispatch = ({}: { type: any; payload: any }) => {};

export const ProjectContext = createContext({ projects, dispatch });

export const projectsReducer = (state: any, action: any) => {
    switch (action.type) {
        case "SET_PROJECTS":
            return { projects: action.payload };
        case "CREATE_PROJECT":
            return { projects: [action.payload, ...state.projects] };
        case "DELETE_PROJECT":
            return {
                projects: state.projects.filter(
                    (p: any) => p._id !== action.payload._id
                ),
            };
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

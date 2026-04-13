

export type Task = {
    id : number,
    task : string,
    subtask : Task[]
}

export type Auth = {
    isAuthenticated : boolean,
    setIsAuthenticated : React.Dispatch<React.SetStateAction<boolean>>
}
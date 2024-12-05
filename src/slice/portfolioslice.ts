interface Project{
    id: number;
    title: string;
    description: string;
    link: string;
}


interface PortfolioState{
    project: Project[];
    about: string;
}
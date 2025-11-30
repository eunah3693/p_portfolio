
export interface NavBarItem {
    text: string;
    url: string;
};

export interface NavBarProps{
    className?: string;
    data: NavBarItem[];
};


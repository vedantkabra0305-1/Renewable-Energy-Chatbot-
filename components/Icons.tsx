import type React from 'react';

const TwoToneIcon: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        {children}
    </svg>
);

export const BriefcaseIcon: React.FC<{ className?: string }> = (props) => (
    <TwoToneIcon {...props}>
        <path fillRule="evenodd" d="M2.25 9.375c0-.922.61-1.706 1.5-2.036V4.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v2.84c.89.33 1.5 1.114 1.5 2.035v8.25A2.25 2.25 0 0 1 19.5 20.25h-15A2.25 2.25 0 0 1 2.25 18V9.375Zm6-3.375a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v.375a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75V6Z" clipRule="evenodd" />
        <path d="M12 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75A.75.75 0 0 0 12.008 9H12Z" opacity={0.4}/>
        <path d="M10.5 12a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75h-.008ZM13.5 12a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75h-.008Z" opacity={0.4}/>
    </TwoToneIcon>
);

export const BuildingOfficeIcon: React.FC<{ className?: string }> = (props) => (
    <TwoToneIcon {...props}>
        <path fillRule="evenodd" d="M.75 6.12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v12.379a.75.75 0 0 1-.392.671l-6 2.667a.75.75 0 0 1-.716 0l-6-2.667a.75.75 0 0 1-.392-.67V6.12Zm3 0a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3Zm0 6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3Z" clipRule="evenodd" />
        <path d="M14.625 5.37a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v12.379a.75.75 0 0 1-.392.671l-6 2.667a.75.75 0 0 1-.716 0l-1.875-.833a.75.75 0 0 1 .217-1.45l1.658.737a.75.75 0 0 0 .716 0l5.25-2.333V6.12h-5.25a.75.75 0 0 1-.75-.75Z" opacity={0.4}/>
    </TwoToneIcon>
);

export const BuildingStorefrontIcon: React.FC<{ className?: string }> = (props) => (
    <TwoToneIcon {...props}>
        <path d="M12.525 6.392a1.5 1.5 0 0 0-2.05 1.86l.75 2.25H4.5v.75c0 .414.336.75.75.75h13.5a.75.75 0 0 0 .75-.75v-.75h-6.815l.75-2.25a1.5 1.5 0 0 0-1.86-2.05Z" />
        <path fillRule="evenodd" d="M3 14.25v-3.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 .75.75V18a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75v-3.75Zm.75 2.25v1.5h15v-1.5H3.75Z" clipRule="evenodd" opacity={0.4}/>
    </TwoToneIcon>
);

export const CogIcon: React.FC<{ className?: string }> = (props) => (
    <TwoToneIcon {...props}>
        <path fillRule="evenodd" d="M11.077 2.518a.75.75 0 0 1 .494.864l-.564 2.193a.75.75 0 0 0 .393.812l2.311.956a.75.75 0 0 1 .516.92l-1.31 3.932a.75.75 0 0 0 .227.885l1.838 1.532a.75.75 0 0 1 .15.969l-2.618 4.534a.75.75 0 0 1-.986.305l-2.41-.892a.75.75 0 0 0-.82.26L9.04 20.9a.75.75 0 0 1-.95.42l-3.932-1.31a.75.75 0 0 0-.885.227l-1.532 1.838a.75.75 0 0 1-.969.15L.27 19.608a.75.75 0 0 1-.305-.986l.892-2.41a.75.75 0 0 0-.26-.82L.39 12.974a.75.75 0 0 1-.42-.95l1.31-3.932a.75.75 0 0 0-.227-.885L.014 5.368a.75.75 0 0 1-.15-.969L2.482.865a.75.75 0 0 1 .986-.305l2.41.892a.75.75 0 0 0 .82-.26L8.43 0a.75.75 0 0 1 .95-.42l3.932 1.31a.75.75 0 0 0 .885-.227l1.532-1.838a.75.75 0 0 1 .969-.15l2.618 4.534a.75.75 0 0 1-.305.986l-1.838 1.532a.75.75 0 0 0-.227.885l1.31 3.932a.75.75 0 0 1-.516.92l-2.311.956a.75.75 0 0 0-.393.812l.564 2.193a.75.75 0 0 1-.494.864l-4.534 2.618a.75.75 0 0 1-.968 0l-4.534-2.618Z" clipRule="evenodd" opacity={0.4} />
        <path d="M12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z" />
    </TwoToneIcon>
);

export const TruckIcon: React.FC<{ className?: string }> = (props) => (
    <TwoToneIcon {...props}>
        <path fillRule="evenodd" d="M4.5 3.75A.75.75 0 0 1 5.25 3h13.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-2.016a3.75 3.75 0 1 0-7.468 0H5.25a.75.75 0 0 1-.75-.75V3.75ZM6 18a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0Zm11.25-1.5a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5Z" clipRule="evenodd" />
        <path d="M15.75 4.5a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V5.25a.75.75 0 0 1 .75-.75Z" opacity={0.4}/>
    </TwoToneIcon>
);

export const PaperAirplaneIcon: React.FC<{ className?: string }> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
    </svg>
);

export const UserCircleIcon: React.FC<{ className?: string }> = (props) => (
    <TwoToneIcon {...props}>
        <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438Z" clipRule="evenodd" opacity={0.4}/>
        <path d="M12 6.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z" />
    </TwoToneIcon>
);

export const SparklesIcon: React.FC<{ className?: string }> = (props) => (
    <TwoToneIcon {...props}>
        <path fillRule="evenodd" d="M12.964 2.24a.75.75 0 0 0-1.928 0l-1.134 2.323a.75.75 0 0 1-.531.531l-2.323 1.134a.75.75 0 0 0 0 1.928l2.323 1.134a.75.75 0 0 1 .531.531l1.134 2.323a.75.75 0 0 0 1.928 0l1.134-2.323a.75.75 0 0 1 .531-.531l2.323-1.134a.75.75 0 0 0 0-1.928l-2.323-1.134a.75.75 0 0 1-.531-.531L12.964 2.24Z" clipRule="evenodd" opacity={0.4}/>
        <path d="M9.75 12.75a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM15.75 12.75a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.75 15.75a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z" />
        <path d="M15.375 18.375a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" opacity={0.4}/>
    </TwoToneIcon>
);


export const BoltIcon: React.FC<{ className?: string }> = (props) => (
    <TwoToneIcon {...props}>
        <path d="m11.162 2.19-7.875 11.25a.75.75 0 0 0 .848 1.063H12l-1.875 6.375a.75.75 0 0 0 1.414.414l7.875-11.25a.75.75 0 0 0-.848-1.063H12l1.875-6.375a.75.75 0 0 0-1.414-.414L11.162 2.19Z" />
    </TwoToneIcon>
);

export const ArrowLeftIcon: React.FC<{ className?: string }> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
    </svg>
);
import { twMerge } from "tailwind-merge";

export function ContainerGrid({ children, className }) {
    const defaultClasses = 'w-full max-w-grid mx-auto px-3'
    const conbinedClasses = twMerge(defaultClasses, className)

    return (
        <div className={conbinedClasses}>
            { children }
        </div>
    )
}
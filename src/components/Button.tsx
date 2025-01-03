import React from "react";

interface ButtonProps {
    href?: string;
    target?: "_self" | "_blank" | "_parent" | "_top";
    label: string;
    icon?: string;
    classes?: string;
}

/**
 * Primary Button
 */
const ButtonPrimary: React.FC<ButtonProps> = ({
    href,
    target = "_self",
    label,
    icon,
    classes = "",
}) => {
    if (href) {
        return (
            <a
                href={href}
                target={target}
                className={`btn btn-primary ${classes}`}
            >
                {label}

                {icon && (
                    <span
                        className="material-symbols-rounded"
                        aria-hidden="true"
                    >
                        {icon}
                    </span>
                )}
            </a>
        );
    } else {
        return (
            <button className={`btn btn-primary ${classes}`}>
                {label}

                {icon && (
                    <span
                        className="material-symbols-rounded"
                        aria-hidden="true"
                    >
                        {icon}
                    </span>
                )}
            </button>
        );
    }
};

/**
 * Outline Button
 */
const ButtonOutline: React.FC<ButtonProps> = ({
    href,
    target = "_self",
    label,
    icon,
    classes = "",
}) => {
    if (href) {
        return (
            <a
                href={href}
                target={target}
                className={`btn btn-outline ${classes}`}
            >
                {label}

                {icon && (
                    <span
                        className="material-symbols-rounded"
                        aria-hidden="true"
                    >
                        {icon}
                    </span>
                )}
            </a>
        );
    } else {
        return (
            <button className={`btn btn-outline ${classes}`}>
                {label}

                {icon && (
                    <span
                        className="material-symbols-rounded"
                        aria-hidden="true"
                    >
                        {icon}
                    </span>
                )}
            </button>
        );
    }
};

export { ButtonPrimary, ButtonOutline };

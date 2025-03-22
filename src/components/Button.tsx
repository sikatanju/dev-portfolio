interface ButtonProps {
    href?: string;
    target?: "_self" | "_blank" | "_parent" | "_top";
    label: string;
    icon?: string;
    classes?: string;
    onClicked: () => void;
}

const ButtonPrimary = ({
    href,
    target = "_self",
    label,
    icon,
    classes = "",
    onClicked,
}: ButtonProps) => {
    if (href) {
        return (
            <a
                href={href}
                target={target}
                className={`btn btn-primary ${classes}`}
                onClick={onClicked}
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
            <button
                className={`btn btn-primary ${classes}`}
                onClick={onClicked}
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
            </button>
        );
    }
};

const ButtonOutline = ({
    href,
    target = "_self",
    label,
    icon,
    classes = "",
    onClicked,
}: ButtonProps) => {
    if (href) {
        return (
            <a
                href={href}
                target={target}
                className={`btn btn-outline ${classes}`}
                onClick={onClicked}
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
            <button
                className={`btn btn-outline ${classes}`}
                onClick={onClicked}
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
            </button>
        );
    }
};

export { ButtonPrimary, ButtonOutline };

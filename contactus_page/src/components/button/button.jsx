import styles from './button.module.css'
export const Button = (props) => {
    const { isOutline, text, icon } = props;
    return (
        <>
            <button
                className={isOutline ? styles.outline_btn : styles.primary_btn}>
                {icon}
                {text}
            </button>

        </>
    );
};

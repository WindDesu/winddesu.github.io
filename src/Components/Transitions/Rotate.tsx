//failed attempt at making rotating thingie

import * as React from "react";
import { Transition } from "react-transition-group";
import { makeStyles, Theme, createStyles } from "@material-ui/core";

const transitionStyle = {
    entering: { transform: "rotate(180deg)" },
    entered: { transform: "rotate(180deg)" },
    exiting: { transform: "rotate(180deg)" },
    exited: { transform: "rotate(180deg)" }
};

const useStyles = makeStyles((theme: Theme) => createStyles({
    wrapper: {
        transition: `opacity 500ms ease-in-out`,
        transform: "rotate(180deg)"
    }
}));

export const Rotate = ({ children, in: inProp }: { children: React.ReactNode; in: boolean }) => {
    const styles = useStyles();
    return (
        <Transition in={inProp} timeout={500} >
            {() => (
                <div className={styles.wrapper}>
                    {children}
                </div>
            )}
        </Transition>
    );
};
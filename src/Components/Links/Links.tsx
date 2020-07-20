import * as React from "react";

import { People, ExpandLess, ExpandMore } from "@material-ui/icons";
import { ListItem, ListItemIcon, ListItemText, Collapse, List, Theme, createStyles,
    makeStyles
} from "@material-ui/core";
import { Discord, Github, Steam } from "@Components/Social";

const useStyles = makeStyles((theme: Theme) => createStyles({
    pad: {
        paddingLeft: theme.spacing(4)
    }
}));

export const Links = () => {
    const [open, setOpen] = React.useState(false);
    const handleClick = () => setOpen(!open);
    const styles = useStyles();

    return (
        <React.Fragment>
            <ListItem button key="Social" onClick={handleClick}>
                <ListItemIcon>
                    <People />
                </ListItemIcon>
                <ListItemText
                    primary={"Social"}
                    primaryTypographyProps={{ noWrap: true }}
                />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <Discord className={styles.pad} />
                    <Github className={styles.pad} />
                    <Steam className={styles.pad} />
                </List>
            </Collapse>
        </React.Fragment>
    );
};
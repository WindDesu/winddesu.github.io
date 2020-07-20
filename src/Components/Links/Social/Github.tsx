import * as React from "react";

import { GithubIcon } from "@Icons";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

const GithubURL = "https://github.com/LavaDesu";

export const Github = ({ className }: { className: string }) => {
    const handleClick = () => window.open(GithubURL, "_blank");
    return (
        <ListItem button key="Github" onClick={handleClick} className={className}>
            <ListItemIcon>
                <GithubIcon />
            </ListItemIcon>
            <ListItemText
                primary={"Github"}
                primaryTypographyProps={{ noWrap: true }}
                secondary={"@LavaDesu"}
            />
        </ListItem>
    );
};
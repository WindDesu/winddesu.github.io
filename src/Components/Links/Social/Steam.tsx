import * as React from "react";

import { SteamIcon } from "@Icons";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

const SteamURL = "https://steamcommunity.com/id/Bwava";

export const Steam = ({ className }: { className: string }) => {
    const handleClick = () => window.open(SteamURL, "_blank");
    return (
        <ListItem button key="Steam" onClick={handleClick} className={className}>
            <ListItemIcon>
                <SteamIcon />
            </ListItemIcon>
            <ListItemText
                primary={"Steam"}
                primaryTypographyProps={{ noWrap: true }}
                secondary={"@Bwava"}
            />
        </ListItem>
    );
};
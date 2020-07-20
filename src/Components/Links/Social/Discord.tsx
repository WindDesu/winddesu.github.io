import * as React from "react";

import { DiscordIcon } from "@Icons";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

export const Discord = ({ className }: { className: string }) => (
    <ListItem key="Discord" className={className}>
        <ListItemIcon>
            <DiscordIcon />
        </ListItemIcon>
        <ListItemText
            primary={"Discord"}
            primaryTypographyProps={{ noWrap: true }}
            secondary={"@Lava#3374"}
        />
    </ListItem>
);
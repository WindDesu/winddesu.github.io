import * as React from "react";

import { SvgIcon, SvgIconProps } from "@material-ui/core";

import DiscordSvg from "./Static/discord.svg";
import GithubSvg from "./Static/github.svg";
import SteamSvg from "./Static/steam.svg";

export const DiscordIcon = (props: SvgIconProps) => <SvgIcon component={DiscordSvg} viewBox="0 0 245 240" {...props} />;
export const GithubIcon = (props: SvgIconProps) => <SvgIcon component={GithubSvg} viewBox="0 0 11.493 11.209" {...props} />;
export const SteamIcon = (props: SvgIconProps) => <SvgIcon component={SteamSvg} viewBox="0 0 24 24" {...props} />;
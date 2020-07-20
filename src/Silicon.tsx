import "react-hot-loader";

import * as React from "react";
import * as ReactDOM from "react-dom";

import {
    CssBaseline,
    Divider,
    Drawer,
    List,
    Theme,
    ThemeProvider,
    Typography,
    createMuiTheme,
    createStyles,
    makeStyles
} from "@material-ui/core";

import { hot } from "react-hot-loader/root";
import { Links } from "@Components/Exports/Links";

// import "@Static/style.css";

const muiTheme = createMuiTheme({
    palette: {
        type: "dark",
        background: {
            default: "#000000",
            paper: "#212121"
        }
    }
});

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display: "flex"
    },
    appBar: {
        width: "82%",
        marginLeft: "18%"
    },
    drawer: {
        width: "18%",
        flexShrink: 0
    },
    paper: {
        width: "18%",
        background: "#00000000"
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    }
}));

const App = () => {
    const styles = useStyles();
    return (
        <ThemeProvider theme={muiTheme}>
            <div className={styles.root}>
                <CssBaseline />
                <Drawer
                    className={styles.drawer}
                    anchor="left"
                    variant="permanent"
                    classes={{
                        paper: styles.paper
                    }}
                >
                    {/* <Toolbar>
                        <Typography variant="h6" noWrap>
                            Links
                        </Typography>
                    </Toolbar> */}
                    <Divider />
                    <List>
                        <Links />
                    </List>
                </Drawer>
                {/* <AppBar color="transparent" position="fixed" className={styles.appBar}>
                    <Toolbar>
                        <Typography variant="h6" noWrap>
                            placeholder placeholder
                        </Typography>
                    </Toolbar>
                </AppBar> */}
                <main className={styles.content}>
                    <Typography paragraph>
                        this is my website thingy<br />
                        work in progress<br />
                        links to the left
                    </Typography>
                </main>
            </div>
        </ThemeProvider>
    );
};

export const Silicon = hot(App);

export const Render = () => ReactDOM.render(<Silicon />, document.getElementById("root"));
Render();
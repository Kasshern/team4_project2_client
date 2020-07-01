import React from "react";
import { List, ListItemText, ListItem, ListItemIcon, makeStyles, Theme, createStyles } from "@material-ui/core";
import { teal, red } from "@material-ui/core/colors";
import { SocialEvent } from "../../../models/Event";
import { useHistory } from "react-router";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        rootk: {
            maxWidth: 200,
            backgroundColor: theme.palette.background.paper,
            color: "teal",
            fontSize: 20,
            padding: 10,
        },
    }),
);

interface EventListBoxComponentProps {
    hostSocialEvents: SocialEvent[];
    attendSocialEvents: SocialEvent[];
}


export const EventListBoxComponent: React.FC<EventListBoxComponentProps> = (props) => {
    const classes = useStyles();
    const history = useHistory();

    const redirectToEventForum = (socialEventId: any) => {
        //pass socialevent.id to the forum
        history.push('/forum');
    }

    const renderHostListComponent = () => {
        return props.hostSocialEvents.map(socialEvent => {
            return (
                <ListItem button  onClick={() => redirectToEventForum(socialEvent.id)}>
                    {socialEvent.title}
                </ListItem>
            )
        })
    }

    const renderAttendListComponent = () => {
        return props.hostSocialEvents.map(socialEvent => {
            return (
                <ListItem button onClick={() => redirectToEventForum(socialEvent.id)}>
                    {socialEvent.title}
                </ListItem>
            )
        })
    }

    return (
        <React.Fragment>
            <div className={classes.rootk}>
            <List component="nav" aria-label="main mailbox folders"> HOST
                {renderHostListComponent()}
            </List>
            <List component="nav" aria-label="main mailbox folders"> ATTEND
                {renderAttendListComponent()}
            </List>
            </div>
        </React.Fragment>
    );
};
import React from "react";
import { Button, Grid, List, ListItem, Typography } from "@mui/material";
import './footer.css';
import WifiCallingIcon from '@mui/icons-material/WifiCalling';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer=()=>{
    return (
        <Grid container className="footerContainer">
            <Grid item className="footer1stinner">
                <img src="/assets/Ekaralu_LOGO.png" width= "269"  height= "95" />
                <Grid className="inner1Btn">
                    <Typography>Ready To Get Start?</Typography>
                    <Button variant="contained" className="innerBtn">Get Start</Button>
                </Grid>
            </Grid>
            <Grid className="vertical-line"></Grid>
            <Grid container>
                <Grid item md={3}>
                    <Typography>Contact Us</Typography>
                    <Typography className="contactDetail">
                        <WifiCallingIcon  fontSize="small"/>
                        +91 75698 64604
                    </Typography>
                    <Typography className="contactDetail">
                        <MailOutlineIcon  fontSize="small"/>
                        Ekaralu@gmail.com
                    </Typography>
                    <Typography className="contactDetail">
                        <LocationOnIcon  fontSize="small"/>
                        Hyderabad-500008
                    </Typography>
                </Grid>
                <Grid item md={3}>
                    <Typography>Explore More</Typography>
                    <List>
                        <ListItem className="footerListItem">Home</ListItem>
                        <ListItem className="footerListItem">About Us</ListItem>
                        <ListItem className="footerListItem">Our journey</ListItem>
                        <ListItem className="footerListItem">Add A Listing</ListItem>
                        <ListItem className="footerListItem">Contact Us</ListItem>
                        <ListItem className="footerListItem">FAQ&apos;s</ListItem>
                    </List>
                </Grid>
                <Grid item md={3}>
                    <Typography>Quick Links</Typography>
                    <List>
                        <ListItem className="footerListItem">Terms & Conditions</ListItem>
                        <ListItem className="footerListItem">Privacy Policy</ListItem>
                        <ListItem className="footerListItem">Site Map</ListItem>
                    </List>
                </Grid>
                <Grid item md={3}>
                    <Typography>can send the property details via whatsapp on?</Typography>
                    <Button variant="contained" className="footBtn"> <WhatsAppIcon fontSize="small"/> On whatsapp +91 75698 64604</Button>
                    <Typography>Follow Us On</Typography>
                    <Grid className="contactImg">
                        <img src="/assets/insta.png" className="footerConnectBtn"/>
                        <img src="/assets/fb.png" className="footerConnectBtn"/>
                        <img src="/assets/yt.png" className="footerConnectBtn"/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid className="vertical-line"></Grid>
            <Grid className="footerEnd">
                <Typography className="brandingFooter">© All right reserve to Ekaralu</Typography>
                <Typography className="brandingFooter">Powerd By Dezen Tech</Typography>
            </Grid>
        </Grid>
    )
}
export default Footer;
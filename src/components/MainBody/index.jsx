import React, { useEffect, useState } from "react";
import { Button, Checkbox, FormControlLabel, Grid, IconButton, InputAdornment, List, ListItem, TextField, TextareaAutosize, Typography } from "@mui/material";
import './body.css';
import axios from "axios";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const MainBody = () => {
    const [datas,setDatas]=useState([]);
    
    useEffect(() => {
        axios.get('/Data.json')
          .then(response => {
            setDatas(response.data);
        })
          .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, []);

    let frameData = [
        {
            id: 1,
            img: "/assets/Frame1.png",
            count: 500,
            desc: "Acres Buying, and selling experience"
        },
        {
            id: 2,
            img: "/assets/Frame2.png",
            count: 50,
            desc: "Experts farmer families "
        },
        {
            id: 3,
            img: "/assets/Frame3.png",
            count: 5000,
            desc: "Trusted Local land consultants"
        },
        {
            id: 4,
            img: "/assets/Frame4.png",
            count: 2500,
            desc: "Happy Customers"
        }
    ]
    let areaData=[
        {
            id:1,
            img:"/assets/A1.jpg",
            area:50,
            location:"Area,Location,Zaheerabad"
        },
        {
            id:2,
            img:"/assets/A2.jpg",
            area:50,
            location:"Area,Location,Zaheerabad"
        },
        {
            id:3,
            img:"/assets/A3.jpg",
            area:50,
            location:"Area,Location,Zaheerabad"
        },
        {
            id:4,
            img:"/assets/A4.jpg",
            area:50,
            location:"Area,Location,Zaheerabad"
        },
        {
            id:5,
            img:"/assets/A3.jpg",
            area:50,
            location:"Area,Location,Zaheerabad"
        },
        {
            id:6,
            img:"/assets/A2.jpg",
            area:50,
            location:"Area,Location,Zaheerabad"
        }
    ]
    let legalData = [
        {
            id: 1,
            img: "/assets/Frame5.png",
            label: "Legal Opinion",
            desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        },
        {
            id: 2,
            img: "/assets/Frame6.png",
            label: "Land Survey",
            desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        },
        {
            id: 3,
            img: "/assets/Frame7.png",
            label: "Agreement of Sale",
            desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        },
        {
            id: 4,
            img: "/assets/Frame8.png",
            label: "Dharani Registration",
            desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        },
        {
            id: 5,
            img: "/assets/Frame9.png",
            label: "Fencing and Development",
            desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        }
    ]
    let articles = [
        {
            id:1,
            img:"/assets/A1.jpg",
            time:"Publisher • 18 Jan 2022",
            label:"Heading",
            desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        },
        {
            id:2,
            img:"/assets/A2.jpg",
            time:"Publisher • 18 Jan 2022",
            label:"Heading",
            desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        },
        {
            id:3,
            img:"/assets/A3.jpg",
            time:"Publisher • 18 Jan 2022",
            label:"Heading",
            desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        }
    ]
    let LandData = [
        {
            id:1,
            area:"Hyderabad",
            places: ["Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Started from 15L P/A","Started from 15L P/A","Started from 15L P/A"]
        },
        {
            id:2,
            area:"Nizamabad",
            places: ["Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Started from 15L P/A","Started from 15L P/A","Started from 15L P/A"]
        },
        {
            id:3,
            area:"Warangal",
            places: ["Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Started from 15L P/A","Started from 15L P/A","Started from 15L P/A"]
        },
        {
            id:4,
            area:"Karimnagar",
            places: ["Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Started from 15L P/A","Started from 15L P/A","Started from 15L P/A"]
        },
        {
            id:5,
            area:"Vikarabad",
            places: ["Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Started from 15L P/A","Started from 15L P/A","Started from 15L P/A"]
        },
        {
            id:6,
            area:"Mehboob Nagar",
            places: ["Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Started from 15L P/A","Started from 15L P/A","Started from 15L P/A"]
        },
        {
            id:7,
            area:"Adilabad",
            places: ["Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Mandal Name","Started from 15L P/A","Started from 15L P/A","Started from 15L P/A"]
        }
    ]
  return <Grid container className="bodyContainer">
    <Grid item md={10}>
        <Grid container className="subContainer1">
            <Grid container className="subInner1">
                <Grid item className="firstLayout">
                    <Typography className="typo1">
                        "<span className="branding">Ekaralu</span>: Your gateway to finding the perfect plot of land and building your future."
                    </Typography>
                </Grid>
                <Grid item md={12}>
                    <TextField 
                        fullWidth 
                        placeholder="Enter Village, Mandal, City,  District " 
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <IconButton>
                                  <img src="/assets/search.png" />
                                </IconButton>
                              </InputAdornment>
                            ),
                            endAdornment: (
                              <InputAdornment position="end">
                                <Grid >
                                    <Button variant="contained" size="medium" className="btnCommon btn1">
                                        Search Land
                                    </Button>
                                    <Button variant="contained" size="medium" className="btnCommon btn2">
                                        Search On Map
                                    </Button>
                                </Grid>
                              </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
            </Grid>
        </Grid>
        <Grid container className="subContainer2">
            <Grid item className="subInner2">
                <Typography className="typo2"> Top Cities </Typography>
                <Typography className="typo3"> Experience the Ultimate Land Buying Journey with ekaralu - Where Every Plot Tells a Story. </Typography>
                <Typography className="typo4">We have analyzed over 10,000 properties using 33+ parameters specific to agricultural farmlands in Telangana. This detailed analysis helps us and our clients make informed decisions, ensuring you get the best value for your investment</Typography>
            </Grid>
            <Grid item className="subInner3">
                <Grid container className="imgCont">
                    { datas && datas?.slice(0,15).map(data => (
                        <Grid item key={data.id} className="cardLayout">
                            <Grid item md={4}>
                                <img src={data.img} className="cardImg" />
                            </Grid>
                            <Grid item md={8}>
                                <Typography>{data.name}</Typography>
                                <Typography>{data.landCount}</Typography>
                            </Grid>
                        </Grid>
                    ))}
                    <Grid item className="lastCardLayout">
                        <Typography>View More</Typography>
                        <ArrowForwardIcon />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid container className="subContainer3">
            {
                frameData?.map( data => (
                    <Grid item key={data.id} md={3} className="subInner3">
                        <img src={data.img} width={64} height={64} />
                        <Typography>{data.count}+</Typography>
                        <Typography className="desc">{data.desc}</Typography>
                    </Grid>
                ) )
            }
        </Grid>
        <Grid container className="subContainer4">
            <Grid item md={6}>
                <Typography className="typo1">
                    Not able to find what you are looking for&#63; <Typography className="typo2">Don&apos;t worry&#33;</Typography> 
                </Typography>
                <Typography className="typo3">we are here to help, fill in the requirement and we will get back to you as soon as wee have your dream agriculture farmland. </Typography>
                <Typography className="typo4">&#34;Don&apos;t worry you are data is safe with us&#34;</Typography>
            </Grid>
            <Grid item md={5} className="formdiv">
                <Grid className="innerForm">
                    <TextField 
                        fullWidth
                        size="small"
                        className="texts"
                        placeholder="Enter Your Name"
                    />
                    <TextField 
                        fullWidth
                        size="small"
                        className="texts"
                        placeholder="Mobile Number"
                    />
                    <TextareaAutosize
                        minRows={5}
                        className="textarea texts"
                        placeholder="Your Requirement" 
                    />
                    <Grid className="cont">
                        <Grid className="contactus">
                            <Checkbox defaultChecked />
                            <Typography className="contact">Need Any help? Just send Hi, </Typography>
                        </Grid>
                        <Grid className="contactus">
                            <img src="/assets/whatsapp.png" style={{marginBottom:"-5px"}}/>
                            <Typography className="contact">On whatsapp +91 75698 64604</Typography>
                        </Grid>
                    </Grid>
                    <Button className="submitBtn">Submit</Button>
                </Grid>
            </Grid>
        </Grid>
        <Grid container className="subContainer5">
            <Grid item className="cont5inner">
                <Typography className="typo1">
                    <Typography className="typo2"> Features &nbsp;</Typography> land&apos;s for you
                </Typography>
                <Typography>Load More</Typography>
            </Grid>
            <Grid item md={12}>
                <Grid container className="imgCont5">
                {
                    areaData?.map(data=>(
                        <Grid item key={data.id} className="cardLayout5">
                            <img src={data.img} className="cardImg5" />
                            <Grid className="imgOver">	&#8377;2.5Cr</Grid>
                            <Grid className="areaDesc">
                                <Typography className="countArea">{data.area} Acres</Typography>
                                <Typography className="areaLocation">{data.location}</Typography>
                                <Button size="medium" variant="contained" fullWidth className="locBtn">
                                    <Typography>More Details</Typography>
                                    <ArrowForwardIcon />
                                </Button>
                            </Grid>
                        </Grid>
                    ))
                }
                </Grid>
            </Grid>
        </Grid>
        <Grid container className="subContainer6">
            <Grid item className="cont6inner">
                <Typography className="typo1">
                    Our Additional <Typography className="typo2">&nbsp; Services </Typography>
                </Typography>
            </Grid>
            <Grid container>
            {
                legalData?.map( data => (
                    <Grid item key={data.id} className="subInner6">
                        <img src={data.img} width={64} height={64} />
                        <Typography className="label6">{data.label}</Typography>
                        <Typography className="desc6">{data.desc}</Typography>
                    </Grid>
                ) )
            }
            </Grid>
        </Grid>
        <Grid container className="subContainer7">
            <Grid item className="container5Header">Blogs</Grid>
            <Grid item className="cont5inner">
                <Typography className="typo1">
                    News & Articles
                </Typography>
                <Typography>View All</Typography>
            </Grid>
            <Grid item md={12}>
                <Grid container className="imgCont5">
                {
                    articles?.map(data=>(
                        <Grid item key={data.id} className="cardLayout5">
                            <img src={data.img} className="cardImg5" />
                            <Grid className="areaDesc">
                                <Typography className="timeArea">{data.time} Acres</Typography>
                                <Grid className="articleHead">
                                    <Typography>{data.label}</Typography>
                                    <ArrowOutwardIcon />
                                </Grid>
                                <Typography className="articleDesc">{data.desc}</Typography>
                            </Grid>
                        </Grid>
                    ))
                }
                </Grid>
            </Grid>
        </Grid>
        <Grid container className="subContainer8">
            <Grid item className="container8Header">Best Lands For you</Grid>
            <Grid container className="placesContainer">
                {
                    LandData?.map(data=>(
                        <Grid key={data.id}>
                            <Typography className="area8name">{data.area}</Typography>
                            <List>
                                {
                                    data.places?.map(place=>(
                                        <ListItem key={place} className="placeName"> {place} </ListItem>
                                    ))
                                }
                            </List>
                        </Grid>
                    ))
                }
            </Grid>
        </Grid>
    </Grid>
  </Grid>;
};
export default MainBody;

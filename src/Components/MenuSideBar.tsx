import { Box, Tabs, Tab, Button, Typography, LinearProgress, CardActionArea, Card } from '@mui/material';
import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Comprehension } from './Comprehension';
import { Dantian } from './Dantian';


export function MenuSideBar(props: any){
    const [value, setValue] = React.useState('one');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
      <Router >
            <Box component="div" style={{
            
          }}>
            <Tabs orientation='vertical' value={value} onChange={handleChange}>
              <Tab value='one' label='Cultivation Chamber' to='/' component={Link}/>
              <Tab value='two' label='Comprehension Hall' to='/ComprehensionHall' component={Link}/>
              <Tab value='three' label='Danger Zone' to='/DangerZone' component={Link}/>
              <Tab value='four' label='Auction Hall' to='/AuctionHall' component={Link}/>
              <Tab value='five' label='Reincarnation' to='/Reincarnation' component={Link}/>
            </Tabs>
          </Box>
            <Routes>
              <Route path="/" element={
                <Box component='div' style={{
                  height:'80vh',
                  width:'80vw',

                }}>
                  <Card style={{
                    height:'100vh',
                  }}>
                    <CardActionArea onClick={props.updateCultivation} disableRipple={true} style={{
                      height:'95%',
                    }}>
                      <Typography variant='h3' component='h3'> Mystical Cultivation </Typography>
                      <Typography variant='h4' component='h4'> {props.tier.name} {props.level}: {props.cultivation}/{props.levelCost} </Typography>
                      <Dantian particles={props.particles}/>
                    </CardActionArea>
                    { props.cultivation === props.levelCost && <Button color='success' variant='contained' onClick={() => props.breakthrough()}> Breakthrough! </Button>}
                  </Card>

                </Box>
              }/>
              <Route path="/ComprehensionHall" element={
                <Box component='div' style={{
                    height:'80vh',
                    width:'80vw',

                  }}>
                    <Card style={{
                      height:'100vh',
                    }}>
                      <Comprehension/>
                    </Card>
                </Box>
                }/>
              <Route path="/DangerZone" element={
                <Box component='div' style={{
                    height:'80vh',
                    width:'80vw',

                  }}>
                    <Card style={{
                      height:'100vh',
                    }}>
                      
                    </Card>
                </Box>
              }/>
              <Route path="/AuctionHall" element={
              <Box component='div' style={{
                    height:'80vh',
                    width:'80vw',

                  }}>
                    <Card style={{
                      height:'100vh',
                    }}>
                      
                    </Card>
                </Box>}/>
                <Route path="/Reincarnation" element={
                <Box component='div' style={{
                    height:'80vh',
                    width:'80vw',

                  }}>
                    <Card style={{
                      height:'100vh',
                    }}>
                      
                    </Card>
                </Box>
                }/>
            </Routes>
          
          </Router>
        
    );
}
import React from 'react';
import './App.css';
import {  } from '@mui/material/Button';
import { ThemeProvider, Typography } from '@mui/material';
import { MenuSideBar } from './Components/MenuSideBar';
import theme from './Components/theme';
import { arrayBuffer } from 'node:stream/consumers';

function App() {
  //how much qi you have 
  const [cultivation, updateCultivation] = React.useState(0);
  //how much qi is needed to get to the next level in your current tier
  const [levelCost, updateLevelCost] = React.useState(100);
  //you current cultivation tier as a number i.e. 0 is qi gathering
  const [tier, updateTier] = React.useState(0);
  //your level within your current tier
  const [level, updateLevel] = React.useState(1);
  const [power, updatePower] = React.useState(10);

  const [particles, setParticles] = React.useState<number[][] | []>([]);

  function createParticle(){
    let d, x, y, z;
    do {
        x = Math.random() * 2.0 - 1.0;
        y = Math.random() * 2.0 - 1.0;
        z = Math.random() * 2.0 - 1.0;
        d = x*x + y*y + z*z;
    } while(d > 1.0);
    let arr: number[] = [x,y,z];
    return arr;
  }

  function cultivate(){
    if(cultivation < levelCost){
      updateCultivation(cultivation+1);
      setParticles([...particles,createParticle()]);
    }
  }
  function breakthrough(){
    if(level !== cultivationTiers[tier].maxLevel){
      updateCultivation(0);
      updateLevelCost(Math.round(levelCost*cultivationTiers[tier].levelCostMultiplier));
      updatePower(Math.round(power*cultivationTiers[tier].levelBonusMultiplier));
      updateLevel(level+1);
      return;
    }
    updateCultivation(0);
    updateTier(tier+1);
    updateLevelCost(Math.round(levelCost*(Math.pow(5,tier))));
    updatePower(Math.round(power*(Math.pow(5,tier))));
    updateLevel(1);
  }
  //stores the values for each cultivation tier
  const cultivationTiers = [
    {
      name: "Qi Gathering",
      levelBonusMultiplier: 1.25,
      levelCostMultiplier: 1.2,
      maxLevel: 9,

    },
    {
      name: "Foundation Establishment",
      levelBonusMultiplier: 1.5,
      levelCostMultiplier: 1.45,
      maxLevel: 9,

    },
  ];
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 4fr',
          gap: 10,
          backgroundColor: "#2f2e4e",
          alignContent:'flex-start',
        }}>
          <MenuSideBar updateCultivation={() => cultivate()} level={level} cultivation={cultivation} levelCost={levelCost} tier={cultivationTiers[tier]} breakthrough={() => breakthrough()} particles={particles}/>
          
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;


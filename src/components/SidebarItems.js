import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BarChartIcon from '@material-ui/icons/BarChart';
import HomeIcon from '@material-ui/icons/Home';

export default function SidebarItems() {
  return(
    <div>
      <ListItem button onClick={() => window.open("http://localhost:3000/", "_self")}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Ínicio" />
      </ListItem>
      <ListItem button onClick={() => window.open("http://localhost:3000/metrics.html", "_self")}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Dados Atualizados" />
      </ListItem>
    </div>
  )
}

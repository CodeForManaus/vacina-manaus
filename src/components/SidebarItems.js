import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BarChartIcon from '@material-ui/icons/BarChart';
import HomeIcon from '@material-ui/icons/Home';
import { WhatsappShareButton } from 'react-share';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

export default function SidebarItems() {
  return(
    <div>
      <ListItem button onClick={() => window.open(process.env.REACT_APP_BASE_URL, "_self")}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Ínicio" />
      </ListItem>
      <ListItem button onClick={() => window.open("/metrics.html", "_self")}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Dados Atualizados" />
      </ListItem>
      <WhatsappShareButton
        style={{ color: "#075e54"}}
        title={"Compartilhe o #VacinaManaus:"}
        url={"https://www.vacinamanaus.com"}
      >
        <ListItem >
          <ListItemIcon>
            <WhatsAppIcon />
          </ListItemIcon>
          <ListItemText primary="Compartilhar">
          </ListItemText>
        </ListItem>
      </WhatsappShareButton>
    </div>
  )
}

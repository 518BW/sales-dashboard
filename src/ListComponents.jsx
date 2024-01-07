import React from "react";
import { FixedSizeList } from "react-window";
import {
  Avatar,
  Box,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import "./List.css";

const assets = [
  { adress: "value", amount: "1" },
  { adress: "value", amount: "2" },
  { adress: "value", amount: "3" },
  { adress: "value", amount: "4" },
  { adress: "value", amount: "5" },
  { adress: "value", amount: "6" },
  { adress: "value", amount: "7" },
  { adress: "value", amount: "8" },
  { adress: "value", amount: "9" },
  { adress: "value", amount: "10" }
];

const handleListItemClick = () => {
  alert("Clicked");
};

const Row = ({ data, index, style }) => {
  return (
    <div style={style}>
      <ListItem key={data[index]}>
        <Grid container>
          <Grid item xs={12}>
            <Box>
              <ListItem button onClick={() => handleListItemClick()}>
                <ListItemIcon>
                  <Avatar variant="rounded"></Avatar>
                </ListItemIcon>
                <ListItemText
                  primary={data[index].adress}
                  secondary={data[index].amount + " value"}
                />
              </ListItem>
            </Box>
          </Grid>
        </Grid>
      </ListItem>
    </div>
  );
};

const ListComponent = () => {
  return (
    <FixedSizeList
      className="List"
      itemData={assets}
      itemCount={assets.length}
      itemSize={64}
      width="100%"
      height={5 * 64}
    >
      {Row}
    </FixedSizeList>
  );
};

export default ListComponent;
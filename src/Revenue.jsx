import { Typography } from "@mui/material"
import { Box } from "@mui/material"
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

const Revenue = () =>{
    const data = [{
        id: 1,
        quarter: 1,
        revenue: "$156,938",
    },
    {
        id: 2,
        quarter: 2,
        revenue: "$234,093"
    },
    {
        id: 3,
        quarter: 3,
        revenue: "$15,088"
    }
]

const totalRevenue = data.reduce((acc, curr) => {
  const revenueValue = parseInt(curr.revenue.replace(/[^0-9.-]+/g, ""));
  return acc + revenueValue;
}, 0);

return (
  <Card sx={{
    bgcolor: 'ghostwhite',
    boxShadow: 1,
    borderRadius: 2,
    p: 2,
    maxWidth: 200,
    maxHeight: 300,
  }}>
    <CardContent>
      <Typography>Revenue Generated</Typography>
      <Typography sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>${totalRevenue}K</Typography>
    </CardContent>
  </Card>
);
};

export default Revenue;
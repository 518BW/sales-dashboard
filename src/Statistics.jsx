import { Typography } from "@mui/material"
import { Box } from "@mui/material"
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

const Statistics = () =>{
    const statistics = [{
        id: 358,
        title: "Sales Obtained",
        stat: 323931,
        percentage: "22%"
    },
    {
        id: 399,
        title: "New Client",
        stat: 5931,
        percentage: "62%"
    },
    {
        id: 234,
        title: "Traffic Received",
        stat: 34851,
        percentage: "62%"
    }
]
    return(
      <Box sx={{ display: 'flex', gap: '2px' }}>
          {statistics.map(({ id, title, stat, percentage })=> {
              return(
                <Card key={id} sx={{
                  bgcolor: 'ghostwhite',
                  boxShadow: 1,
                  borderRadius: 2,
                  p: 2,
                  minWidth: 400,
                  maxHeight: 300,
                }}>
                  <CardContent>
                    <Typography>{title}</Typography>
                  </CardContent>
                  <CardContent>
                    <Typography>{stat}</Typography>
                  </CardContent>
                  <CardContent>
                    <Typography>{percentage}</Typography>
                  </CardContent>
                </Card>                                 
                )
            })}
      </Box>
        
    )
}
export default Statistics;
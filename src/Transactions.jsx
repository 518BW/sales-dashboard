import { Typography } from "@mui/material"
import { Box } from "@mui/material"
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

const Transactions = () =>{
    const transactions = [{
        id: 1,
        username: "johnsmith",
        item: "14a5r6",
        sales: "$6,938",
        date: 5-12-2024
        
    },
    {
        id: 2,
        username: "codycoder",
        item: "3e23r5",
        sales: "$4,093",
        date: 3-3-2023
    },
    {
        id: 3,
        username: "mikemike",
        item: "53r3w3",
        sales: "$5,988",
        date: 3-8-2023
    }
]

return (
    <Card sx={{
      bgcolor: 'ghostwhite',
      boxShadow: 1,
      borderRadius: 2,
      p: 2,
      width: 300,
      maxHeight: 300,
      overflow: 'auto',
    }}>
      <CardContent>
        <Typography variant="h6">Recent Transactions</Typography>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          
        }}>
          {transactions.map(({ id, username, item, sales, date }) => (
            <Box key={id}>
              <Typography>{`Username: ${username}`}</Typography>
              <Typography sx={{ bgcolor: 'lightgreen', p: 1, borderRadius: 1 }}>{`Sales: ${sales}`}</Typography>
              <Typography>{`Date: ${date}`}</Typography>
              <Typography>{`Item: ${item}`}</Typography>
             
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};


export default Transactions;
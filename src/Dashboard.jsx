import Statistics from "./Statistics"
import ResponsiveDrawer from "./ResponsiveDrawer"

const Dashboard = () => {
    return (
        <div>
            <header>
                <h1>Dashboard</h1>
                <h2>Welcome to your dashboard</h2>
            </header>
            <Statistics />
            <ResponsiveDrawer />
        </div>       
    )
}

export default Dashboard;
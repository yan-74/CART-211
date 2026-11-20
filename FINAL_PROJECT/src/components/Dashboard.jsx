import './Dashboard.css'

function Dashboard({ stats }) {
    return (
        <div className="dashboard">
            <div className="dashboard-left">
                <div className="bar_chart">
                    <p>COMPANY PERFORMANCE</p>
                    <div className="stat">
                        <label htmlFor="revenue">Revenue</label>
                        <progress id="revenue" value={stats.revenue} min="0" max="100" />
                        <span>{stats.revenue}%</span>
                    </div>
                    <div className="stat">
                        <label htmlFor="investor-trust">Investor Trust</label>
                        <progress id="investor-trust" value={stats.investorTrust} min="0" max="100" />
                        <span>{stats.investorTrust}%</span>
                    </div>
                    <div className="stat">
                        <label htmlFor="user-satisfaction">User Satisfaction</label>
                        <progress id="user-satisfaction" value={stats.userSatisfaction} min="0" max="100" />
                        <span>{stats.userSatisfaction}%</span>
                    </div>
                    <div className="stat">
                        <label htmlFor="user-traffic">User Traffic</label>
                        <progress id="user-traffic" value={stats.userTraffic} min="0" max="100" />
                        <span>{stats.userTraffic}%</span>
                    </div>
                </div>
                <div className="line_chart"></div>
            </div>
            <div className="dashboard-right">
                <div className="company_outlook"></div>
                <div className="message_board"></div>
            </div>
        </div>
    )
}

export default Dashboard

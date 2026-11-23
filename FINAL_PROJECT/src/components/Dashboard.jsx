import './Dashboard.css'
import { getCompanyOutlook, getDepartmentSeverities } from './data/companyStatus.js'
/* CHART CODE REFERENCED FROM: https://github.com/reactchartjs/react-chartjs-2/blob/master/sandboxes/line/default/App.tsx */
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard({ stats, statsHistory }) {
    /* chart settings and data */
    const chartData = {
        labels: statsHistory.map((point) => `S${point.scenario}`),
        datasets: [
            {
                label: 'Revenue',
                data: statsHistory.map((point) => point.revenue),
                borderColor: '#f5c542',
                backgroundColor: '#f5c542',
            },
            {
                label: 'Investor Trust',
                data: statsHistory.map((point) => point.investorTrust),
                borderColor: '#ff5d8f',
                backgroundColor: '#ff5d8f',
                tension: 0.3,
            },
            {
                label: 'User Satisfaction',
                data: statsHistory.map((point) => point.userSatisfaction),
                borderColor: '#aeb2ff',
                backgroundColor: '#aeb2ff',
                tension: 0.3,
            },
            {
                label: 'User Traffic',
                data: statsHistory.map((point) => point.userTraffic),
                borderColor: '#4de3ff',
                backgroundColor: '#4de3ff',
                tension: 0.3,
            },
        ],
    }

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    boxWidth: 8,
                    boxHeight: 8,
                    color: '#263240',
                    font: {
                        family: 'VT323, monospace',
                        size: 15,
                    }
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    color: '#263240',
                    font: {
                        family: 'VT323',
                        size: 20,
                    },
                },
                grid: {
                    color: 'rgba(38, 50, 64, 0.5)',
                },
            },
            y: {
                min: 0,
                max: 100,
                ticks: {
                    color: '#263240',
                    font: {
                        family: 'VT323',
                        size: 20,
                    },
                },
                grid: {
                    color: 'rgba(38, 50, 64, 0.5)',
                },
            },
        },
    }

    /* get the company status based on the current stats */
    const companyStatus = getCompanyOutlook(stats)
    const departmentSeverities = getDepartmentSeverities(stats)

    return (
        <div className="dashboard">
            <div className="dashboard-left">
                <div className="bar_chart">
                    <p>COMPANY PERFORMANCE</p>
                    <div className="stat">
                        <label htmlFor="revenue">Revenue</label>
                        <progress id="revenue" value={stats.revenue} min="0" max="100" />
                        <span className={`stat_${departmentSeverities.finance}`}>{stats.revenue}%</span>
                    </div>
                    <div className="stat">
                        <label htmlFor="investor-trust">Investor Trust</label>
                        <progress id="investor-trust" value={stats.investorTrust} min="0" max="100" />
                        <span className={`stat_${departmentSeverities.investorRelations}`}>{stats.investorTrust}%</span>
                    </div>
                    <div className="stat">
                        <label htmlFor="user-satisfaction">User Satisfaction</label>
                        <progress id="user-satisfaction" value={stats.userSatisfaction} min="0" max="100" />
                        <span className={`stat_${departmentSeverities.product}`}>{stats.userSatisfaction}%</span>
                    </div>
                    <div className="stat">
                        <label htmlFor="user-traffic">User Traffic</label>
                        <progress id="user-traffic" value={stats.userTraffic} min="0" max="100" />
                        <span className={`stat_${departmentSeverities.marketing}`}>{stats.userTraffic}%</span>
                    </div>
                </div>
                <hr></hr>
                <div className="line_chart">
                    <p>PERFORMANCE HISTORY</p>
                    <Line data={chartData} options={chartOptions} />
                </div>
            </div>
            <div className="dashboard-right">
                <div className="company_outlook">
                    <p>COMPANY OUTLOOK</p>
                    <div className={`outlook_${companyStatus.severity}`} id="status_card">
                        <h3 className="status_text">Current Status: {companyStatus.title}</h3>
                        <p>{companyStatus.message}</p>
                    </div>
                </div>
                <hr></hr>
                <div className="message_board">
                    <p>DEPARTMENT MESSAGES</p>
                    <div className={`message_item department_${departmentSeverities.finance}`}>
                        <div className="message_header">
                            <h4>Finance</h4>
                            <p className="message_time">9:55 am</p>
                        </div>
                        <p>We need to improve our social media presence.</p>
                    </div>
                    <div className={`message_item department_${departmentSeverities.investorRelations}`}>
                        <div className="message_header">
                            <h4>Investor Relations</h4>
                            <p className="message_time">9:55 am</p>
                        </div>
                        <p>We need to improve our social media presence.</p>
                    </div>
                    <div className={`message_item department_${departmentSeverities.product}`}>
                        <div className="message_header">
                            <h4>Product</h4>    
                            <p className="message_time">9:55 am</p>
                        </div>
                        <p>We need to improve our social media presence.</p>
                    </div>
                    <div className={`message_item department_${departmentSeverities.marketing}`}>
                        <div className="message_header">
                            <h4>Marketing</h4>
                            <p className="message_time">9:55 am</p>
                        </div>
                        <p>We need to improve our social media presence.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard

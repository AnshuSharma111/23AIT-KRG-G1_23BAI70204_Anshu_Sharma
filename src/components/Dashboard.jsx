// 1) Total carbon ftprint, activity 

const Dashboard = ({logs}) => {
    const total = logs.reduce((sum, current) => {
        sum = sum + current.carbon;
        return sum;
    }, 0);

    return (
        <div>
            <h1>Total Footprint</h1>
            <h2>{total} KG</h2>

            <ul>
                {
                    logs.map((curr) => (
                        <li key={curr.id}>
                            {curr.activity} = {curr.carbon} KG
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Dashboard;
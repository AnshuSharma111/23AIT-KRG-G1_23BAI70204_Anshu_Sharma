const Logs = ({ logs }) => {
    // const data = logs.filter((log) => log.carbon >= 4);
    return (
        <div>
            <h1>High Carbon Activities</h1>
            <ul style = {{color : "red"}}>
                {
                    // data.map((log) => (
                    //     <li key={log.id}>
                    //         {log.activity} = {log.carbon} KG
                    //     </li>
                    // ))

                    logs.map((log) => (
                        log.carbon >= 4 ? <li key = {log.id}>{log.activity} = {log.carbon}</li> : console.log("Low Carbon Activity Detected")
                    ))
                }
            </ul>
            <h1>Low Carbon Activities</h1>
            <ul style = {{color : "green"}}>
                {
                    logs.map((log) => (
                        log.carbon < 4 ? <li key = {log.id}>{log.activity} = {log.carbon}</li> : console.log("Low Carbon Activity Detected")
                    ))
                }
            </ul>
        </div>
    )
}

export default Logs;
export default function Kortit({card}){
    return(
        <div className="card">
            <img src = {card.image}/>
            <ul className="stat-list">
                {card.stats.map((stat,index) =>(
                    <li className="stat-list-item" key={index}>
                        <span>{stat.name}</span>
                        <span>{stat.value}</span>
                    </li>
                ))}
            </ul>

        </div>
    );
}
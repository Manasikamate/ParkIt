import './Card.css'

export default function Card(props){
    let data=props.data

    return(
        <div className="flex flex-row w-9/12 p-12">
            <div>
                <img className="card-img" src={data.img} width={500} />
            </div>
            <div>
                <h2>{data.heading}</h2>
                <p>{data.desc}</p>
            </div>
        </div>
    )
}
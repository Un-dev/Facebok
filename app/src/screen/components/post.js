
export default function Post(props){
    return(
        <div>
            <h1>{props.title ? props.title : ''}</h1>
            {props.link  ? <img src={props.link} alt='tototo' />: ''}
            <div>{props.text ? props.text : ''}</div>
        </div>
    )
}
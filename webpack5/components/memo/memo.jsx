import React,{useState} from 'react'

const Memo = () => {
    const [username,setUsername] =useState('')
    const [list,setList] = useState([])

    const change= e =>{
        const {value} = {...e.target}
        setUsername(value)
    }
    

    const submit= e => {
        e.preventDefault()
        let newList = [...list]
        newList.push(username)

        setList(newList)
        setUsername('')
    }


   

    const renderList = list.map( (v,k)=>{
        return <li key={k}>{v}</li>
    } )

    return (
        <>
            <h1>Hello</h1>
            <form onSubmit={submit}>
                <input type="text" value={username} onChange={change} />
                <button type="submit">submit</button>
            </form>
            <ul>
                {renderList}
            </ul>
        </>
    )
}

export default Memo
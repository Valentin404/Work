import React, { useEffect } from 'react';
import EachUser from './EachUser'

const AllUserPage =() =>{
    const [data, setData] = React.useState([])
    const [isloadingPage, setIsLoadingPage] = React.useState(false)
    
useEffect(()=>{
fetch('https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0')
.then(response => response.ok ? response.json() : Promise.reject('What do you mean?'))
.then(response=> setData(response))
.then(setIsLoadingPage(true))
.catch(error => {
    console.log(error);
})
},[])

if(!isloadingPage) { return (<div>Loading...</div>)}
    return(
        data.map(data=>( <EachUser key={data.id} data={data} />))
       
    )
}

export default AllUserPage
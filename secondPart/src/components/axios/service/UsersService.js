import axios from 'axios'

// Business Logic start
function getUsers()
    {
        // we have to write the logic to send the request to the backend application. For that we need two things
        // 1. URL  2. Method type information

        // From frontend if we want to send a request, we need AXIOS

        // axios.get("https://randomuser.me/api/?results=20");

        var usersPromiseObject = axios.get("https://randomuser.me/api/?results=20");
        usersPromiseObject.then(   
                (users)=>
                {   
                    console.log("then");
                    // console.log(users);//This will give the entire response
                    console.log(users.data);
                    console.log(users.data.results);//This will give you the users data as an array and each person's data is an object
                }
            )
            .catch(
                (error)=>
                {
                    console.log("error");
                    console.log(error)
                }
            );
        
    }

    export default getUsers
    //Business Logic end

const auth_link = 'https://www.strava.com/oauth/token'

// function get_activity(res){
//     const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}`;
//     fetch(activities_link)
//         .then(
//             (res) =>
//                 console.log(res.json())
//         )
// }
export async function authorize(){
    const res = await fetch(auth_link,{
        method: 'post',
        headers: {
            'Accept': 'applixation/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            client_id: '46099',
            client_secret: '5360e30e8ed5dd52c0f5ffd55a052efb445206be',
            refresh_token: '40ed2939adaeee86886f3bf5d2d9c7fca1b2f38c',
            grant_type: 'refresh_token'
        })
    });
    const data = await res.json();
    return data;
}


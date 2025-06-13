import axios from "axios";

const registerAction = async ({request}) => {
    const formData = await request.formData()
    const name = formData.get('name')
    const email = formData.get('email')
    const password = formData.get('password')

    const host = import.meta.env.VITE_BACKEND_HOSTNAME;
    const port = import.meta.env.VITE_BACKEND_PORT;
    const url = `http://${host}:${port}/api/v1/register`;
    try {
        const response = await axios.post(url, {
            name,
            email,
            password,
          });

          console.log("✅ Register success:", response.data);

    } catch (err){
        console.log(err)
    }
    return
}
//     console.log(formData.get('name'))
//     console.log(formData.get('email'))
//     console.log(formData.get('password'))
// }

export default registerAction

// const apiUrl = process.env.ROOT_URL
export const sendMail = async (currentState: any, formData: FormData) => {
  // Get data off form
  const email = formData.get("email")
  const name = formData.get("name")
  const message = formData.get("message")

  console.log(email, name, message)

  const res = await fetch("http://localhost:3000/api/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, name, message }),
  })

  const data = await res.json()
  if (res.ok) {
    return data.error.message
    // console.log("error occured")
  }

  // set formstate variable
}

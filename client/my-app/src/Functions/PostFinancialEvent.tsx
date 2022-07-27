function PostFinancialEvent(
  formAmout: number,
  formType: string,
  formDescription: string
) {
  const data = {
    user: {
      id: 2,
      email: "gardenboss@shire.com",
      password: "mrfrodo1234",
      firstName: "Samwise",
      lastName: "Gamgee",
    },
    date: new Date().toISOString(),
    amount: formAmout,
    type: formType,
    description: formDescription,
  };

  fetch("http://localhost:8080/events", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  return 0;
}

export default PostFinancialEvent;

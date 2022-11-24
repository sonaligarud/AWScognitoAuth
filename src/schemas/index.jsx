import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  family_name :  Yup.string().min(2).max(25).required("Please enter your Surname"),
  // username :  Yup.string().min(2).max(25).required("Please enter your Username").username()
  // .test("unique_username", "Username must be unique", async (username, values) => {
  //   const response = await list-users(username);
  //   console.log(response);
  //   return response;
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().
   matches(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
  ).required("Please enter your password"),
  gender: Yup.string().required("Please select gender"),
});
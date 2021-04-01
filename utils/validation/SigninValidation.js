import * as yup from 'yup';

async function SigninValidation(data){
  let schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required().min(6)
  });

  return await schema.isValid(data);
}

export default SigninValidation;
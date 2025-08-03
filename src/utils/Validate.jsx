

export const CheckValidation = (email , password) => {

    const emailvalidate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const passwordvalidate = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);

    if(!email && !password ){
        return "Please enter email and password";
    }

    if(!emailvalidate){
        return "Please enter valid email";
    }

    if(!passwordvalidate){
        return "Please enter valid password";
    }

    return null;
}
const ErrorHandler = (statuscode, message)=>{
    const error = new Error()
    error.statuscode = statuscode
    error.message = message
    return error
}
export default ErrorHandler
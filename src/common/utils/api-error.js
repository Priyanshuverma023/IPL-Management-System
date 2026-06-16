class ApiError extends Error {
  constructor(statusCode , message) {
    super(message)
    this.statusCode = statusCode
    // this.message = Error.message
    this.success = false
  }
}

export default ApiError;
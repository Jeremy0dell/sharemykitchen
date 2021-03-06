export const populateUser = (user) => {
  if (user) {
    return {
      authentication: {
        isLoggedIn: true,
        user,
      },
    }
  }
  return null
}

export const homePage = () => {
  return null
}

export const helloPage = () => {
  return {
    hello: { message: 'Server side pre loaded message' },
  }
}

export const helloAsyncPage = () => {
  return {
    hello: { messageAsync: 'Server side pre loaded message for async page' },
  }
}

export const helloEndpoint = (num) => {
  return {
    serverMessage: `Hello from the server: Received num ${num}`,
  }
}
